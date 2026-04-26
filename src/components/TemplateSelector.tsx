'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Template } from '@/types/template';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import useSelected from '@/hooks/useSelected';
import CustomTemplateUpload from './CustomTemplateUpload';
import { Upload } from 'lucide-react';

type TemplateSelectorProps = {
    templates: Record<string, Template>;
    onSelect: (key: string) => void;
    onCustomTemplateSelect?: (template: Template) => void;
};

const TEMPLATES_PER_PAGE = 60;
const PRELOAD_NEXT_PAGE = true;

export default function TemplateSelector({ templates, onSelect, onCustomTemplateSelect }: TemplateSelectorProps) {
    const { currentPage, setCurrentPage } = useSelected();
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
    const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
    const imageRefs = useRef<Map<string, HTMLElement>>(new Map());

    const templateEntries = useMemo(() => Object.entries(templates), [templates]);
    const totalPages = Math.ceil(templateEntries.length / TEMPLATES_PER_PAGE);

    const paginatedTemplates = useMemo(() => {
        const startIndex = (currentPage - 1) * TEMPLATES_PER_PAGE;
        const endIndex = startIndex + TEMPLATES_PER_PAGE;
        return templateEntries.slice(startIndex, endIndex);
    }, [templateEntries, currentPage]);

    const nextPageTemplates = useMemo(() => {
        if (!PRELOAD_NEXT_PAGE || currentPage >= totalPages) return [];
        const startIndex = currentPage * TEMPLATES_PER_PAGE;
        const endIndex = startIndex + TEMPLATES_PER_PAGE;
        return templateEntries.slice(startIndex, endIndex);
    }, [templateEntries, currentPage, totalPages]);

    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(1);
        }
    }, [totalPages, currentPage, setCurrentPage]);

    useEffect(() => {
        if (nextPageTemplates.length > 0) {
            nextPageTemplates.forEach(([, template]) => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = template.image;
                link.crossOrigin = 'anonymous';
                document.head.appendChild(link);

                setTimeout(() => {
                    if (document.head.contains(link)) {
                        document.head.removeChild(link);
                    }
                }, 30000);
            });
        }
    }, [nextPageTemplates]);

    useEffect(() => {
        intersectionObserverRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const img = entry.target as HTMLElement;
                        const imageSrc = img.dataset.src;
                        if (imageSrc && !loadedImages.has(imageSrc)) {
                            setLoadedImages(prev => new Set([...prev, imageSrc]));
                        }
                    }
                });
            },
            {
                rootMargin: '50px',
                threshold: 0.1,
            }
        );

        return () => {
            intersectionObserverRef.current?.disconnect();
        };
    }, [loadedImages]);

    useEffect(() => {
        const observer = intersectionObserverRef.current;
        if (!observer) return;

        const currentImageRefs = imageRefs.current;

        currentImageRefs.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            currentImageRefs.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, [paginatedTemplates]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const setImageRef = (key: string) => (element: HTMLElement | null) => {
        if (element) {
            imageRefs.current.set(key, element);
            element.dataset.src = templates[key]?.image;
        } else {
            imageRefs.current.delete(key);
        }
    };

    const renderPaginationItems = () => {
        const items = [];

        if (currentPage > 3) {
            items.push(
                <PaginationItem key={1}>
                    <PaginationLink
                        onClick={() => handlePageChange(1)}
                        isActive={currentPage === 1}
                    >
                        1
                    </PaginationLink>
                </PaginationItem>
            );

            if (currentPage > 4) {
                items.push(
                    <PaginationItem key="ellipsis-start">
                        <PaginationEllipsis />
                    </PaginationItem>
                );
            }
        }

        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);

        for (let page = startPage; page <= endPage; page++) {
            items.push(
                <PaginationItem key={page}>
                    <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={currentPage === page}
                    >
                        {page}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        if (currentPage < totalPages - 2) {
            if (currentPage < totalPages - 3) {
                items.push(
                    <PaginationItem key="ellipsis-end">
                        <PaginationEllipsis />
                    </PaginationItem>
                );
            }

            items.push(
                <PaginationItem key={totalPages}>
                    <PaginationLink
                        onClick={() => handlePageChange(totalPages)}
                        isActive={currentPage === totalPages}
                    >
                        {totalPages}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        return items;
    };

    return (
        <div className="space-y-6 w-full">
            {/* Section header + Custom upload */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1 pt-2"
            >
                <div className="flex items-center gap-3">
                    <h2
                        className="text-2xl font-black uppercase text-[#1a1a1a] tracking-tight"
                        style={{ textShadow: '2px 2px 0px #6a7bd1' }}
                    >
                        Choose a Template
                    </h2>
                    <span
                        className="bg-[#FFD600] text-[#1a1a1a] text-xs font-black uppercase px-2 py-0.5 border-2 border-[#1a1a1a] rotate-1"
                        style={{ boxShadow: '2px 2px 0px #1a1a1a' }}
                    >
                        {templateEntries.length}+
                    </span>
                </div>
                <div style={{ boxShadow: '3px 3px 0px #6a7bd1' }}>
                <CustomTemplateUpload
                    onTemplateCreate={onCustomTemplateSelect || (() => { })}
                    buttonText="Upload Your Own"
                    buttonIcon={<Upload className="h-4 w-4" />}
                    buttonClassName="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white text-sm font-black uppercase tracking-wide border-2 border-[#1a1a1a] transition-all hover:-translate-y-0.5"
                    title="Upload Custom Template"
                    description="Upload your own image to create a custom meme template."
                />
                </div>
            </motion.div>

            {/* Templates Grid */}
            <section className="grid grid-cols-6 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 gap-4 grid-flow-dense w-full">
                <AnimatePresence mode="popLayout">
                    {paginatedTemplates.map(([key, tpl], index) => {
                        const isPriority = index < 6 && currentPage === 1;
                        return (
                            <motion.div
                                key={key}
                                ref={setImageRef(key)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    duration: 0.3,
                                    delay: Math.min(index * 0.03, 0.3),
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                onClick={() => onSelect(key)}
                                className="group cursor-pointer"
                            >
                                <motion.div
                                    className="relative aspect-square border-2 border-[#1a1a1a] overflow-hidden bg-white"
                                    style={{ boxShadow: '3px 3px 0px #1a1a1a' }}
                                    whileHover={{
                                        y: -4,
                                        boxShadow: '6px 6px 0px #6a7bd1',
                                        borderColor: '#6a7bd1',
                                    } as never}
                                    transition={{ duration: 0.15 }}
                                >
                                    <Image
                                        src={tpl.image}
                                        alt={key}
                                        fill
                                        className="object-cover transition-all duration-300 group-hover:brightness-105"
                                        loading={isPriority ? 'eager' : 'lazy'}
                                        priority={isPriority}
                                        quality={85}
                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16.67vw"
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                        onLoad={() => {
                                            setLoadedImages(prev => new Set([...prev, tpl.image]));
                                        }}
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-[#6a7bd1]/0 group-hover:bg-[#6a7bd1]/10 transition-colors duration-200" />
                                </motion.div>
                                <p className="text-center text-xs font-bold mt-1.5 capitalize text-[#1a1a1a]/70 group-hover:text-[#6a7bd1] transition-colors truncate px-1">
                                    {key.replace(/-/g, ' ')}
                                </p>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </section>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex flex-col items-center pt-6 space-y-4"
                >
                    <div
                        className="bg-[#fffbea] border-2 border-[#1a1a1a] px-3 py-1 text-xs font-black uppercase tracking-widest text-[#1a1a1a]/60"
                        style={{ boxShadow: '2px 2px 0px #1a1a1a' }}
                    >
                        Page {currentPage} of {totalPages}
                    </div>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                    className={`border-2 border-[#1a1a1a] font-bold ${currentPage === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:-translate-y-0.5 transition-transform'}`}
                                    style={{ boxShadow: currentPage === 1 ? 'none' : '2px 2px 0px #1a1a1a' }}
                                />
                            </PaginationItem>

                            {renderPaginationItems()}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                                    className={`border-2 border-[#1a1a1a] font-bold ${currentPage === totalPages ? 'opacity-40 cursor-not-allowed' : 'hover:-translate-y-0.5 transition-transform'}`}
                                    style={{ boxShadow: currentPage === totalPages ? 'none' : '2px 2px 0px #1a1a1a' }}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </motion.div>
            )}
        </div>
    );
}
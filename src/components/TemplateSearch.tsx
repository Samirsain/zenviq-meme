"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { templates } from "@/data/templates"
import MainContainer from "./MainContainer"
import { motion } from "framer-motion"
import useSelected from "@/hooks/useSelected"

export default function TemplateSearch() {
    const [searchQuery, setSearchQuery] = useState("")
    const { selected } = useSelected()

    const filteredTemplates = Object.entries(templates).filter(([key]) =>
        key.toLowerCase().replace(/-/g, " ").includes(searchQuery.toLowerCase())
    )

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Search bar — only visible when no template selected */}
            {!selected && (
                <div className="flex justify-center py-8 px-4 bg-[#fffbea] border-b-4 border-[#1a1a1a] relative">
                    <div className="halftone-bg" />
                    <motion.div
                        className="relative w-full max-w-lg z-10"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 }}
                    >
                        {/* Label above */}
                        <div className="flex items-center gap-2 mb-2">
                            <span
                                className="bg-[#1a1a1a] text-[#FFD600] text-xs font-black uppercase tracking-widest px-2 py-1 -rotate-1"
                                style={{ boxShadow: "2px 2px 0px #6a7bd1" }}
                            >
                                🔍 Search Templates
                            </span>
                        </div>

                        {/* Input */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1a1a1a]/50 z-10" />
                            <motion.input
                                type="text"
                                placeholder="Search by name… e.g. &quot;drake&quot;, &quot;distracted&quot;"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-5 py-3 font-semibold text-sm bg-white comic-border hard-shadow text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] transition-transform"
                                style={{ boxShadow: "4px 4px 0px #1a1a1a" }}
                                whileFocus={{ boxShadow: "6px 6px 0px #6a7bd1" } as never}
                            />
                        </div>

                        {/* Result count */}
                        {searchQuery && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-2 text-xs font-bold text-[#1a1a1a]/60 uppercase tracking-wide"
                            >
                                {filteredTemplates.length} result{filteredTemplates.length !== 1 ? "s" : ""} found
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            )}

            {/* Templates or empty state */}
            {filteredTemplates.length < 1 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="min-h-[40vh] flex flex-col items-center justify-center gap-4 py-20"
                >
                    <div
                        className="bg-[#FFD600] comic-border hard-shadow px-8 py-6 text-center -rotate-1"
                    >
                        <p className="text-2xl font-black uppercase text-[#1a1a1a]">😵 No templates found!</p>
                        <p className="text-sm font-semibold text-[#1a1a1a]/70 mt-1">
                            Try a different search term
                        </p>
                    </div>
                </motion.div>
            ) : (
                <MainContainer templates={Object.fromEntries(filteredTemplates)} />
            )}
        </motion.div>
    )
}
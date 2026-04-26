"use client"

import { motion } from "framer-motion"
import useSelected from "@/hooks/useSelected"
import { Sparkles, Zap, MousePointerClick, ExternalLink } from "lucide-react"
import Image from "next/image"

const MARQUEE_TEXT =
    "✦ MAKE YOUR MEME ✦ ZENVIQ MEME ✦ FREE FOREVER ✦ NO SIGN-UP ✦ 1000+ TEMPLATES ✦ INSTANT DOWNLOAD ✦ MAKE YOUR MEME ✦ ZENVIQ MEME ✦ FREE FOREVER ✦ NO SIGN-UP ✦ 1000+ TEMPLATES ✦ INSTANT DOWNLOAD ✦"

const STATS = [
    { value: "1000+", label: "Templates" },
    { value: "∞", label: "Creativity" },
    { value: "0s", label: "Sign-up Time" },
    { value: "100%", label: "Free" },
]

export default function HeroSection() {
    const { selected } = useSelected()

    if (selected) return null

    return (
        <>
            {/* ── HERO ── */}
            <section className="relative overflow-hidden bg-[#fffbea] border-b-4 border-[#1a1a1a] pt-10 pb-0">
                {/* Halftone bg */}
                <div className="halftone-bg" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

                        {/* ── LEFT: Text content ── */}
                        <div className="flex-1 flex flex-col items-start gap-5 text-left">

                            {/* Eyebrow badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#FFD600] px-4 py-1.5 text-xs font-black uppercase tracking-widest comic-border -rotate-1"
                                style={{ boxShadow: "3px 3px 0px #6a7bd1" }}
                            >
                                <Zap className="h-3 w-3 fill-[#FFD600]" />
                                Internet&apos;s Fastest Meme Maker
                                <Zap className="h-3 w-3 fill-[#FFD600]" />
                            </motion.div>

                            {/* Main headline */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <h1
                                    className="text-[clamp(3rem,8vw,6.5rem)] font-black uppercase leading-[0.9] tracking-tighter text-[#1a1a1a]"
                                    style={{ textShadow: "4px 4px 0px #6a7bd1" }}
                                >
                                    Make<br />
                                    Memes<br />
                                    <span
                                        className="inline-block bg-[#FFD600] px-3 py-1 border-4 border-[#1a1a1a] rotate-1 mt-1"
                                        style={{ boxShadow: "6px 6px 0px #1a1a1a" }}
                                    >
                                        That Slap 😤
                                    </span>
                                </h1>
                            </motion.div>

                            {/* Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-base md:text-lg font-semibold text-[#1a1a1a]/70 max-w-sm leading-snug"
                            >
                                Pick a template, add your text, download — done.{" "}
                                <span className="font-black text-[#1a1a1a]">Zero BS, pure meme energy.</span>
                            </motion.p>

                            {/* Scroll hint */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#1a1a1a]/50"
                            >
                                <MousePointerClick className="h-4 w-4 animate-bounce" />
                                Pick a template below
                            </motion.div>

                            {/* Powered by */}
                            <motion.a
                                href="https://zenviqdigital.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="inline-flex items-center gap-2 bg-[#6a7bd1] text-white px-4 py-2 border-2 border-[#1a1a1a] text-xs font-black uppercase tracking-widest"
                                style={{ boxShadow: "3px 3px 0px #1a1a1a" }}
                                whileHover={{ y: -2, boxShadow: "5px 5px 0px #1a1a1a" } as never}
                                whileTap={{ y: 1, boxShadow: "1px 1px 0px #1a1a1a" } as never}
                            >
                                <span>⚡ Powered by Zenviq Digital</span>
                                <ExternalLink className="h-3 w-3 opacity-80" />
                            </motion.a>
                        </div>

                        {/* ── RIGHT: Pepe mascot ── */}
                        <motion.div
                            className="flex-shrink-0 relative flex items-end justify-center"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                        >
                            {/* Radial burst behind image */}
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: "repeating-conic-gradient(from 0deg, transparent 0deg 12deg, rgba(106,123,209,0.12) 12deg 24deg)",
                                    width: "110%",
                                    height: "110%",
                                    top: "-5%",
                                    left: "-5%",
                                }}
                            />

                            {/* Speech bubble */}
                            <motion.div
                                className="absolute -top-4 -left-8 bg-white comic-border hard-shadow px-4 py-2 rounded-[16px] rounded-bl-none z-20"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8, type: "spring", stiffness: 400 }}
                            >
                                <p className="text-sm font-black text-[#1a1a1a] whitespace-nowrap">
                                    No watermarks! 😂
                                </p>
                            </motion.div>

                            {/* Sparkles badge */}
                            <motion.div
                                className="absolute -top-4 -right-6 bg-[#FFD600] comic-border hard-shadow px-3 py-1.5 z-20 flex items-center gap-1"
                                animate={{ rotate: [3, -3, 3] }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                            >
                                <Sparkles className="h-3.5 w-3.5 text-[#1a1a1a]" />
                                <span className="text-xs font-black uppercase text-[#1a1a1a]">Free!</span>
                            </motion.div>

                            {/* Main image frame */}
                            <motion.div
                                className="relative bg-white border-4 border-[#1a1a1a] p-2 rotate-2 z-10"
                                style={{ boxShadow: "8px 8px 0px #1a1a1a" }}
                                animate={{ rotate: [2, -1, 2] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            >
                                <Image
                                    src="/assets/image.png"
                                    alt="Zenviq Meme mascot — Pepe the meme king"
                                    width={300}
                                    height={300}
                                    className="object-contain w-[220px] h-[220px] md:w-[280px] md:h-[280px]"
                                    priority
                                />
                            </motion.div>

                            {/* Bottom floating bubble */}
                            <motion.div
                                className="absolute -bottom-3 -right-4 bg-[#6a7bd1] text-white comic-border hard-shadow px-4 py-2 rounded-[16px] rounded-br-none z-20"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1, type: "spring", stiffness: 400 }}
                            >
                                <p className="text-xs font-black whitespace-nowrap">
                                    1000+ templates 🔥
                                </p>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>

                {/* Bottom wave spacer */}
                <div className="h-10" />
            </section>

            {/* ── MARQUEE TICKER ── */}
            <div className="bg-[#1a1a1a] text-[#FFD600] font-black uppercase py-3 border-b-4 border-[#1a1a1a] marquee-container select-none">
                <div className="marquee-content text-sm tracking-widest whitespace-nowrap">
                    {MARQUEE_TEXT}
                </div>
            </div>

            {/* ── STATS BAR ── */}
            <section className="bg-[#6a7bd1] border-b-4 border-[#1a1a1a] py-5">
                <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i, duration: 0.4 }}
                            className="flex flex-col items-center gap-1 bg-white comic-border hard-shadow py-3 px-4"
                        >
                            <span className="text-3xl font-black text-[#1a1a1a] leading-none">
                                {stat.value}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/60">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    )
}
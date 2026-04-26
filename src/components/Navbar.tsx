"use client"

import { Zap, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
    return (
        <motion.nav
            className="w-full sticky top-0 z-50 bg-[#6a7bd1] border-b-4 border-[#1a1a1a]"
            style={{ boxShadow: "0 4px 0px 0px #1a1a1a" }}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/">
                        <motion.div
                            className="flex items-center gap-2 group"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <div
                                className="bg-[#FFD600] border-2 border-[#1a1a1a] p-1.5 rotate-3 group-hover:rotate-6 transition-transform duration-200"
                                style={{ boxShadow: "2px 2px 0px #1a1a1a" }}
                            >
                                <Zap className="h-4 w-4 text-[#1a1a1a] fill-[#1a1a1a]" />
                            </div>
                            <span className="text-xl font-black text-white tracking-tight uppercase italic drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]">
                                Zenviq{" "}
                                <span
                                    className="bg-[#FFD600] text-[#1a1a1a] px-1.5 py-0.5 not-italic border-2 border-[#1a1a1a]"
                                    style={{ boxShadow: "2px 2px 0px #1a1a1a" }}
                                >
                                    Meme
                                </span>
                            </span>
                        </motion.div>
                    </Link>

                    {/* Centre badge */}
                    <div className="hidden md:flex items-center">
                        <motion.div
                            className="bg-white border-2 border-[#1a1a1a] px-3 py-1 text-xs font-black uppercase tracking-widest text-[#1a1a1a] -rotate-1"
                            style={{ boxShadow: "2px 2px 0px #1a1a1a" }}
                            animate={{ rotate: [-1, 1, -1] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        >
                            🔥 Free. No sign-up.
                        </motion.div>
                    </div>

                    {/* Right side actions */}
                    <div className="flex items-center gap-2">
                        {/* Powered by */}
                        <motion.a
                            href="https://zenviqdigital.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-black uppercase tracking-wide"
                            style={{ boxShadow: "2px 2px 0px #1a1a1a" }}
                            whileHover={{ y: -2, boxShadow: "4px 4px 0px #1a1a1a" } as never}
                            whileTap={{ y: 1, boxShadow: "1px 1px 0px #1a1a1a" } as never}
                        >
                            <span className="text-[#6a7bd1]">⚡</span>
                            <span>Zenviq Digital</span>
                            <ExternalLink className="h-3 w-3 opacity-60" />
                        </motion.a>

                        {/* Star Us */}
                        <motion.a
                            href="https://zenviqdigital.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="max-[380px]:hidden px-4 py-1.5 bg-[#1a1a1a] text-white border-2 border-[#1a1a1a] text-sm font-black uppercase tracking-wide flex items-center gap-2"
                            style={{ boxShadow: "2px 2px 0px #FFD600" }}
                            whileHover={{ y: -2, boxShadow: "4px 4px 0px #FFD600" } as never}
                            whileTap={{ y: 1, boxShadow: "1px 1px 0px #FFD600" } as never}
                        >
                            🌐 Visit Us
                        </motion.a>
                    </div>

                </div>
            </div>
        </motion.nav>
    )
}
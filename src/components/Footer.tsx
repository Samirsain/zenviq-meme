import Link from "next/link"
import { Zap, ExternalLink, Heart } from "lucide-react"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="w-full bg-[#1a1a1a] border-t-4 border-[#1a1a1a] mt-16">
            {/* Yellow accent stripe */}
            <div className="h-2 w-full bg-[#FFD600]" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <div
                            className="bg-[#FFD600] border-2 border-[#FFD600] p-1.5 rotate-3"
                            style={{ boxShadow: "2px 2px 0px #FFD600" }}
                        >
                            <Zap className="h-4 w-4 text-[#1a1a1a] fill-[#1a1a1a]" />
                        </div>
                        <span className="text-lg font-black text-white uppercase italic tracking-tight">
                            Zenviq{" "}
                            <span className="bg-[#FFD600] text-[#1a1a1a] px-1.5 py-0.5 not-italic border-2 border-[#FFD600]">
                                Meme
                            </span>
                        </span>
                    </div>

                    {/* Copyright */}
                    <div className="flex flex-col items-center gap-1 text-center">
                        <p className="text-white/80 text-sm font-bold uppercase tracking-widest">
                            © {year} Zenviq Meme. All rights reserved.
                        </p>
                        <p className="text-white/40 text-xs flex items-center gap-1">
                            Made with <Heart className="h-3 w-3 fill-[#FFD600] text-[#FFD600]" /> by{" "}
                            <Link
                                href="https://zenviqdigital.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FFD600] font-black hover:underline underline-offset-2"
                            >
                                Zenviq Digital
                            </Link>
                        </p>
                    </div>

                    {/* Powered by link */}
                    <Link
                        href="https://zenviqdigital.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#FFD600] text-[#1a1a1a] px-4 py-2 border-2 border-[#FFD600] text-xs font-black uppercase tracking-wide hover:-translate-y-0.5 transition-transform"
                        style={{ boxShadow: "3px 3px 0px #FFD600" }}
                    >
                        <span>⚡ zenviqdigital.in</span>
                        <ExternalLink className="h-3 w-3" />
                    </Link>

                </div>
            </div>
        </footer>
    )
}
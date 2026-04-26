<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>MEME COIN - TO THE MOON!</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&amp;family=Lexend:wght@100..900&amp;family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed": "#351000",
                        "on-primary-container": "#705d00",
                        "background-main": "#FFD600",
                        "on-secondary-fixed": "#0f1c2c",
                        "on-primary": "#ffffff",
                        "on-secondary-container": "#566475",
                        "surface-dark": "#0D1B2A",
                        "on-surface": "#1f1b10",
                        "outline": "#7f775f",
                        "surface-container-highest": "#eae2cf",
                        "on-background": "#1f1b10",
                        "on-tertiary-fixed-variant": "#7a3000",
                        "on-error": "#ffffff",
                        "secondary-container": "#d3e1f6",
                        "secondary-fixed": "#d6e4f9",
                        "outline-variant": "#d0c6ab",
                        "primary-fixed": "#ffe170",
                        "surface": "#fff8ef",
                        "tertiary-fixed-dim": "#ffb693",
                        "on-secondary-fixed-variant": "#3a4859",
                        "surface-container-lowest": "#ffffff",
                        "inverse-on-surface": "#f9f0dd",
                        "inverse-surface": "#343024",
                        "surface-dim": "#e1d9c7",
                        "tertiary-fixed": "#ffdbcc",
                        "secondary-fixed-dim": "#bac8dc",
                        "warm-white": "#FFFDF0",
                        "tertiary": "#a04100",
                        "background": "#fff8ef",
                        "primary": "#705d00",
                        "surface-tint": "#705d00",
                        "surface-bright": "#fff8ef",
                        "text-primary": "#1A1A1A",
                        "accent-red": "#E63946",
                        "on-primary-fixed-variant": "#544600",
                        "on-primary-fixed": "#221b00",
                        "surface-container-low": "#fcf3e0",
                        "text-on-dark": "#FFFDF0",
                        "secondary": "#525f71",
                        "on-surface-variant": "#4d4632",
                        "error": "#ba1a1a",
                        "primary-fixed-dim": "#e9c400",
                        "inverse-primary": "#e9c400",
                        "surface-container-high": "#f0e7d5",
                        "error-container": "#ffdad6",
                        "surface-variant": "#eae2cf",
                        "primary-container": "#ffd600",
                        "on-error-container": "#93000a",
                        "surface-container": "#f6edda",
                        "on-tertiary-container": "#a14100",
                        "on-secondary": "#ffffff",
                        "tertiary-container": "#ffcfba",
                        "on-tertiary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "max_width": "1200px",
                        "gutter": "24px",
                        "section_padding_h": "6%",
                        "section_padding_v": "100px",
                        "stack_gap": "16px"
                    },
                    "fontFamily": {
                        "heading-lg": ["Plus Jakarta Sans"],
                        "body-lg": ["Lexend"],
                        "display-xl": ["Epilogue"],
                        "label-bold": ["Plus Jakarta Sans"],
                        "body-md": ["Lexend"],
                        "heading-md": ["Plus Jakarta Sans"]
                    },
                    "fontSize": {
                        "heading-lg": ["48px", { "lineHeight": "1.2", "fontWeight": "800" }],
                        "body-lg": ["20px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "display-xl": ["80px", { "lineHeight": "1.0", "letterSpacing": "-0.04em", "fontWeight": "900" }],
                        "label-bold": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "800" }],
                        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "heading-md": ["32px", { "lineHeight": "1.3", "fontWeight": "700" }]
                    }
                }
            }
        }
    </script>
<style>
        .halftone-bg {
            background-image: radial-gradient(#1A1A1A 2px, transparent 2px);
            background-size: 16px 16px;
            opacity: 0.1;
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
        }
        .comic-border {
            border: 4px solid #1A1A1A;
        }
        .hard-shadow {
            box-shadow: 6px 6px 0px 0px #1A1A1A;
        }
        .hard-shadow-hover:hover {
            transform: translate(-2px, -2px);
            box-shadow: 8px 8px 0px 0px #1A1A1A;
        }
        .hard-shadow-active:active {
            transform: translate(4px, 4px);
            box-shadow: 2px 2px 0px 0px #1A1A1A;
        }
        .radial-burst {
            background: repeating-conic-gradient(from 0deg, transparent 0deg 15deg, rgba(255, 255, 255, 0.2) 15deg 30deg);
            position: absolute;
            inset: 0;
            z-index: 0;
        }
        .marquee-container {
            overflow: hidden;
            white-space: nowrap;
        }
        .marquee-content {
            display: inline-block;
            animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
    </style>
</head>
<body class="bg-surface-bright text-text-primary font-body-md overflow-x-hidden selection:bg-background-main selection:text-text-primary">
<!-- TopNavBar -->
<nav class="bg-[#000080] text-[#FFD600] font-['Epilogue'] font-black uppercase italic tracking-tighter docked full-width top-0 border-b-4 border-[#FFD600] shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] sticky z-50 flex justify-between items-center px-6 py-4 w-full max-w-[1200px] mx-auto transition-transform duration-100">
<div class="text-3xl font-black text-[#FFD600] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            MEME COIN
        </div>
<div class="hidden md:flex gap-8 items-center text-lg">
<a class="text-[#FFD600] underline decoration-4 underline-offset-8 active:translate-y-1 hover:scale-105 transition-transform duration-100" href="#home">Home</a>
<a class="text-white hover:text-[#FFD600] transition-colors active:translate-y-1 hover:scale-105 transition-transform duration-100" href="#about">About</a>
<a class="text-white hover:text-[#FFD600] transition-colors active:translate-y-1 hover:scale-105 transition-transform duration-100" href="#tokenomics">Tokenomics</a>
<a class="text-white hover:text-[#FFD600] transition-colors active:translate-y-1 hover:scale-105 transition-transform duration-100" href="#roadmap">Roadmap</a>
<a class="text-white hover:text-[#FFD600] transition-colors active:translate-y-1 hover:scale-105 transition-transform duration-100" href="#gallery">Gallery</a>
</div>
<button class="bg-[#FFD600] text-black px-6 py-2 comic-border hard-shadow hover:scale-105 transition-transform duration-100 active:translate-y-1 hidden md:block">
            BUY NOW
        </button>
<button class="md:hidden text-[#FFD600]">
<span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">menu</span>
</button>
</nav>
<!-- Hero Section -->
<section class="relative bg-background-main min-h-[921px] flex items-center justify-center pt-24 pb-20 overflow-hidden border-b-4 border-text-primary" id="home">
<div class="halftone-bg"></div>
<div class="max-w-[1200px] mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div class="flex flex-col items-start gap-6 relative z-20">
<div class="inline-block bg-text-primary text-background-main px-4 py-2 font-label-bold uppercase tracking-widest comic-border transform -rotate-2">
                    🔥 THE ONE YOU TRUST
                </div>
<h1 class="font-display-xl text-text-primary drop-shadow-[4px_4px_0px_#ffffff] uppercase transform -skew-x-6">
                    MEME<br/>COIN
                </h1>
<p class="font-heading-md text-text-primary bg-white px-4 py-2 comic-border hard-shadow inline-block">
                    TO THE MOON AND BEYOND! 🚀
                </p>
<div class="flex flex-wrap gap-4 mt-4">
<button class="bg-text-primary text-background-main font-label-bold px-8 py-4 text-xl comic-border hard-shadow hard-shadow-hover hard-shadow-active transition-all duration-200">
                        BUY $MEME
                    </button>
<button class="bg-white text-text-primary font-label-bold px-8 py-4 text-xl comic-border hard-shadow hard-shadow-hover hard-shadow-active transition-all duration-200 group">
<span class="group-hover:text-background-main transition-colors">WHITEPAPER</span>
</button>
</div>
<div class="flex gap-4 mt-6">
<a class="bg-white p-3 comic-border hard-shadow hard-shadow-hover transition-all" href="#">
<span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">share</span>
</a>
<a class="bg-white p-3 comic-border hard-shadow hard-shadow-hover transition-all" href="#">
<span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">forum</span>
</a>
</div>
</div>
<div class="relative h-[500px] w-full flex items-center justify-center">
<div class="radial-burst rounded-full absolute inset-0 transform scale-150"></div>
<!-- Abstract floating comic clouds as pseudo elements or svgs would go here, using a div placeholder for aesthetic -->
<div class="absolute top-10 right-10 bg-white comic-border px-6 py-4 rounded-[50px] hard-shadow transform rotate-6 animate-bounce">
<span class="font-heading-md text-text-primary">WOW!</span>
</div>
<div class="absolute bottom-10 left-10 bg-white comic-border px-6 py-4 rounded-[50px] hard-shadow transform -rotate-12">
<span class="font-heading-md text-accent-red">MUCH COIN</span>
</div>
<div class="w-full h-full relative z-10 comic-border bg-white p-2 transform rotate-2 hard-shadow">
<img alt="Funny dog in a space suit illustration looking heroic with comic book style shading" class="w-full h-full object-cover border-2 border-text-primary" data-alt="Funny dog in a space suit illustration looking heroic with comic book style shading, bright colors, pop art aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDECI9oww1c-z65dQ83l7Q0GFFgAiNMoSW4zvUlzfNpm5_P_WYG02vhpxZZPD74fU0Wpzkj0nPDYc3GB3O_3mhk_BmhIbjMtsB5Ytlc-Uamsd2VYHxxGw7UVLW_l5STOgaqxZ_pgXi_7Uhn3N3HxZLTtoFN68aO9hxd_JNJEsqkZMUku767r3bUf4vGjuMTUTGG2kv2HFfNFRVc85YIhEMGiwKKm_9fWkt62Zi3lpsd66SjtM9aZiZvQkyMUlZZ1tbtEyIvEYux-kA"/>
</div>
</div>
</div>
</section>
<!-- Marquee Ticker -->
<div class="bg-text-primary text-background-main font-heading-md uppercase py-4 border-b-4 border-text-primary marquee-container">
<div class="marquee-content whitespace-nowrap">
            🚀 BUY NOW • TO THE MOON • $MEME • 🚀 BUY NOW • TO THE MOON • $MEME • 🚀 BUY NOW • TO THE MOON • $MEME • 🚀 BUY NOW • TO THE MOON • $MEME • 🚀 BUY NOW • TO THE MOON • $MEME •
        </div>
</div>
<!-- About Section -->
<section class="bg-surface-dark py-[100px] border-b-4 border-text-primary relative overflow-hidden" id="about">
<div class="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div class="relative z-10 order-2 md:order-1">
<div class="comic-border bg-background-main p-4 transform -rotate-3 hard-shadow inline-block">
<img alt="Dog wearing cool sunglasses looking confident on a yellow background" class="w-full h-auto comic-border" data-alt="Dog wearing cool sunglasses looking confident on a yellow background, high contrast, comic book aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfZbDhpXnpN1zt9L6LPMIk1jfnj7FMyhEQd7M6aICzQn9FMeSkleFEXLpAhOD5CMbTJppO6hYathc8li5ShRP-QlrJFp4PnhuBm56A-WeI7hTSkBXhDSEkiskAOy0LKRyoNgWz35b0L8H1E_AUyIMvKHwFu3my8Q6zO8DyFJgPJFaLcGsUwtESk-QEhxwVNchu1go8flfhR_NMr1-AHaV69dvp8V0rlOgJc2ib-wuQHh-fwjNd30tnC6Jcp_fRHCHPJ5cFx0yME3I"/>
</div>
<div class="absolute -bottom-10 -right-10 bg-white comic-border px-6 py-4 hard-shadow transform rotate-12 max-w-[200px]">
<p class="font-label-bold text-text-primary text-center">"I'M JUST HERE FOR THE GAINS!"</p>
</div>
</div>
<div class="flex flex-col gap-6 text-on-dark order-1 md:order-2">
<div class="inline-block bg-background-main text-text-primary px-4 py-2 font-label-bold uppercase tracking-widest comic-border self-start transform rotate-1">
                    MEET THE MASCOT
                </div>
<h2 class="font-display-xl text-white drop-shadow-[4px_4px_0px_#E63946] uppercase">
                    THE LORE
                </h2>
<p class="font-body-lg text-warm-white">
                    Born in the depths of the internet, MEME COIN isn't just a currency; it's a lifestyle. We're rejecting the suits and embracing the chaos. Join the loudest, fastest-growing community in the meme-verse.
                </p>
<ul class="flex flex-col gap-4 mt-4 font-heading-md text-white">
<li class="flex items-center gap-4">
<span class="material-symbols-outlined text-background-main text-4xl drop-shadow-[2px_2px_0px_#000]">stars</span>
                        100% Community Driven
                    </li>
<li class="flex items-center gap-4">
<span class="material-symbols-outlined text-background-main text-4xl drop-shadow-[2px_2px_0px_#000]">stars</span>
                        Zero Taxes
                    </li>
<li class="flex items-center gap-4">
<span class="material-symbols-outlined text-background-main text-4xl drop-shadow-[2px_2px_0px_#000]">stars</span>
                        Locked Liquidity
                    </li>
</ul>
</div>
</div>
</section>
<!-- Tokenomics Section -->
<section class="bg-background-main py-[100px] border-b-4 border-text-primary relative" id="tokenomics">
<div class="halftone-bg"></div>
<div class="max-w-[1200px] mx-auto px-6 relative z-10">
<div class="text-center mb-16">
<h2 class="font-display-xl text-text-primary drop-shadow-[4px_4px_0px_#ffffff] uppercase inline-block bg-white comic-border px-8 py-2 transform -skew-x-6 hard-shadow">
                    TOKENOMICS
                </h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Stat Card 1 -->
<div class="bg-text-primary text-background-main p-8 comic-border hard-shadow flex flex-col justify-center items-center gap-4 transform hover:scale-105 transition-transform">
<h3 class="font-heading-lg text-white">TOTAL SUPPLY</h3>
<p class="font-display-xl text-background-main drop-shadow-[2px_2px_0px_#ffffff]">1B</p>
</div>
<!-- Stat Card 2 -->
<div class="bg-white text-text-primary p-8 comic-border hard-shadow flex flex-col justify-center items-center gap-4 transform hover:scale-105 transition-transform rotate-1">
<h3 class="font-heading-lg">LIQUIDITY</h3>
<p class="font-display-xl text-accent-red drop-shadow-[2px_2px_0px_#1A1A1A]">70%</p>
</div>
<!-- Stat Card 3 -->
<div class="bg-white text-text-primary p-8 comic-border hard-shadow flex flex-col justify-center items-center gap-4 transform hover:scale-105 transition-transform -rotate-1">
<h3 class="font-heading-lg">COMMUNITY</h3>
<p class="font-display-xl text-accent-red drop-shadow-[2px_2px_0px_#1A1A1A]">20%</p>
</div>
<!-- Stat Card 4 -->
<div class="bg-text-primary text-background-main p-8 comic-border hard-shadow flex flex-col justify-center items-center gap-4 transform hover:scale-105 transition-transform">
<h3 class="font-heading-lg text-white">TEAM</h3>
<p class="font-display-xl text-background-main drop-shadow-[2px_2px_0px_#ffffff]">10%</p>
</div>
</div>
</div>
</section>
<!-- Marquee Ticker -->
<div class="bg-accent-red text-white font-heading-md uppercase py-4 border-b-4 border-text-primary marquee-container">
<div class="marquee-content whitespace-nowrap">
            💎 HODL • DIAMOND HANDS • WAGMI • 💎 HODL • DIAMOND HANDS • WAGMI • 💎 HODL • DIAMOND HANDS • WAGMI • 💎 HODL • DIAMOND HANDS • WAGMI •
        </div>
</div>
<!-- Roadmap Section -->
<section class="bg-white py-[100px] border-b-4 border-text-primary" id="roadmap">
<div class="max-w-[1200px] mx-auto px-6">
<h2 class="font-display-xl text-text-primary drop-shadow-[4px_4px_0px_#FFD600] uppercase mb-16 text-center">
                ROADMAP
            </h2>
<div class="flex flex-col gap-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-text-primary before:via-text-primary before:to-transparent">
<!-- Phase 1 -->
<div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-text-primary bg-background-main text-text-primary font-bold shadow-[2px_2px_0px_0px_#1A1A1A] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        1
                    </div>
<div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white comic-border hard-shadow border-l-8 border-l-background-main relative overflow-hidden">
<div class="absolute -right-4 -bottom-4 text-[120px] font-display-xl text-black opacity-5 leading-none">01</div>
<h3 class="font-heading-lg text-text-primary mb-2 relative z-10">LAUNCH</h3>
<ul class="font-body-md text-text-primary space-y-2 relative z-10">
<li>• Token Generation</li>
<li>• Website V1</li>
<li>• Community Setup</li>
</ul>
</div>
</div>
<!-- Phase 2 -->
<div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-text-primary bg-background-main text-text-primary font-bold shadow-[2px_2px_0px_0px_#1A1A1A] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        2
                    </div>
<div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white comic-border hard-shadow border-l-8 border-l-background-main relative overflow-hidden">
<div class="absolute -right-4 -bottom-4 text-[120px] font-display-xl text-black opacity-5 leading-none">02</div>
<h3 class="font-heading-lg text-text-primary mb-2 relative z-10">GROWTH</h3>
<ul class="font-body-md text-text-primary space-y-2 relative z-10">
<li>• CoinGecko Listing</li>
<li>• CoinMarketCap Listing</li>
<li>• Marketing Push</li>
</ul>
</div>
</div>
<!-- Phase 3 -->
<div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-text-primary bg-background-main text-text-primary font-bold shadow-[2px_2px_0px_0px_#1A1A1A] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        3
                    </div>
<div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white comic-border hard-shadow border-l-8 border-l-background-main relative overflow-hidden">
<div class="absolute -right-4 -bottom-4 text-[120px] font-display-xl text-black opacity-5 leading-none">03</div>
<h3 class="font-heading-lg text-text-primary mb-2 relative z-10">EXPANSION</h3>
<ul class="font-body-md text-text-primary space-y-2 relative z-10">
<li>• CEX Listings</li>
<li>• Merch Store</li>
<li>• NFT Collection</li>
</ul>
</div>
</div>
<!-- Phase 4 -->
<div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-text-primary bg-background-main text-text-primary font-bold shadow-[2px_2px_0px_0px_#1A1A1A] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        4
                    </div>
<div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white comic-border hard-shadow border-l-8 border-l-background-main relative overflow-hidden">
<div class="absolute -right-4 -bottom-4 text-[120px] font-display-xl text-black opacity-5 leading-none">04</div>
<h3 class="font-heading-lg text-text-primary mb-2 relative z-10">MOON</h3>
<ul class="font-body-md text-text-primary space-y-2 relative z-10">
<li>• Global Dominance</li>
<li>• Meme Metaverse</li>
<li>• ???</li>
</ul>
</div>
</div>
</div>
</div>
</section>
<!-- Meme Gallery -->
<section class="bg-surface-dark py-[100px] border-b-4 border-text-primary" id="gallery">
<div class="max-w-[1200px] mx-auto px-6">
<h2 class="font-display-xl text-white drop-shadow-[4px_4px_0px_#FFD600] uppercase mb-16 text-center inline-block bg-text-primary px-8 py-2 comic-border transform rotate-2 hard-shadow">
                GALLERY
            </h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Panel 1 -->
<div class="bg-white p-2 comic-border hard-shadow transform hover:-rotate-2 transition-transform">
<div class="aspect-square relative overflow-hidden comic-border">
<img alt="Dog looking confused meme format" class="w-full h-full object-cover" data-alt="Dog looking confused meme format, high contrast comic style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5xdAxQutcmtYqIiD9JBbH5RRONadZGj62lhUdFrVK1AR10Cnh6LfCbg6dXcx-dAAhXom_HLj8_3s2Oj3UbUdnMg6zMVYIuQ2gXdcyA7FpySP_zpcjplfTpBazO2QlQLuhJHVyLrSpQdAgq3ckAXEKogyhqTZBhsvxRpWnTB6dFGyX6unk6aIx1SD6nSclLDe4Q4WwVSzgzROhimsewDsH6CRWlQ6hCUKURSPrMgwmb--HgtJsVB8ql6-5AOGKhQkZAWrlvYDyQLQ"/>
<div class="absolute bottom-4 left-0 w-full bg-background-main text-text-primary font-heading-md text-center py-2 border-y-4 border-text-primary">
                            WEN BINANCE?
                        </div>
</div>
</div>
<!-- Panel 2 -->
<div class="bg-white p-2 comic-border hard-shadow transform hover:rotate-2 transition-transform translate-y-4">
<div class="aspect-square relative overflow-hidden comic-border">
<img alt="Dog smiling wearing a hat meme format" class="w-full h-full object-cover" data-alt="Dog smiling wearing a hat meme format, vibrant pop art colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAunZ290etUVn_dbvAkXjUK2MNdflFU11HDaRrMowXu4u8EQJSOE7tt2FmGz_u-osqhdNVh2a5j3XJsjGWv6BKkhq1mBcdlko5x6lZFfDfSzicH5LsuzzDQ_YYgvdt8N9m5B53FYeTTjqhmLuOzGKQt1uDlkNpkGwVrAMscy80D2c4hm4VR10A1D1ypbpIiTRMhht3E2DiqQG_AI1-Ntt2ZoVzHeOf4YaFOAuTZcrVpUSFK-gLkY6DwUwa9i_uglj-3bUQ16-CU2TY"/>
<div class="absolute top-4 left-0 w-full bg-accent-red text-white font-heading-md text-center py-2 border-y-4 border-text-primary">
                            BULLISH AF
                        </div>
</div>
</div>
<!-- Panel 3 -->
<div class="bg-white p-2 comic-border hard-shadow transform hover:-rotate-1 transition-transform">
<div class="aspect-square relative overflow-hidden comic-border">
<img alt="Dog resting on couch meme format" class="w-full h-full object-cover" data-alt="Dog resting on couch meme format, halftone comic style shading" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpcpm8zz0ULMat43G34uAeH8g3FfrRnal7oSnR_4IVVyjmGZrCGUTM-x-_maw1h5JodPzctybeXDEgKIJ1TddaqgOvK5E5lSkvL0B7afPr_-AA32gw2tDky9WDCibfl4cxGvAnzZneJhsimK8MiNhtX1T7BAZ5ntuIgpPmbRZ_2gc3-ifrmL7LLRCE3tzKBOWNRY3eU2sDpgawsqhvJeIqn0Ds_svT7Oc6rrfC1wcQlLaeO_sOPinClHrpCVjxBCL1rD4fKvOAYxs"/>
<div class="absolute bottom-4 left-0 w-full bg-white text-text-primary font-heading-md text-center py-2 border-y-4 border-text-primary">
                            HOLDING
                        </div>
</div>
</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-black text-[#FFD600] font-['Epilogue'] font-bold uppercase text-sm full-width py-12 border-t-8 border-[#FFD600] flex flex-col md:flex-row justify-between items-center px-10 w-full gap-8">
<div class="text-[#FFD600] font-black italic text-2xl drop-shadow-[2px_2px_0px_#ffffff]">
            MEME COIN
        </div>
<div class="flex flex-wrap justify-center gap-8">
<a class="text-white opacity-80 hover:text-[#FFD600] hover:skew-x-2 transition-all cursor-pointer" href="#">Twitter</a>
<a class="text-white opacity-80 hover:text-[#FFD600] hover:skew-x-2 transition-all cursor-pointer" href="#">Telegram</a>
<a class="text-white opacity-80 hover:text-[#FFD600] hover:skew-x-2 transition-all cursor-pointer" href="#">DexTools</a>
<a class="text-white opacity-80 hover:text-[#FFD600] hover:skew-x-2 transition-all cursor-pointer" href="#">Contract</a>
</div>
<div class="text-center md:text-right opacity-80">
            © 2024 MEME COIN. TO THE MOON!
        </div>
</footer>
</body></html>
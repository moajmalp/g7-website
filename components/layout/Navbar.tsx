"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10"
            role="navigation"
            aria-label="Main Navigation"
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-outfit font-bold tracking-tight text-white hover:text-primary transition-colors" aria-label="G7 Holdings Home">
                    G7 HOLDINGS
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-secondary-text hover:text-white transition-colors text-sm font-medium">
                        Home
                    </Link>
                    <Link href="/#about" className="text-secondary-text hover:text-white transition-colors text-sm font-medium">
                        About
                    </Link>
                    <Link href="/blog" className="text-secondary-text hover:text-white transition-colors text-sm font-medium">
                        Blog
                    </Link>
                    <Link href="/#contact" className="text-secondary-text hover:text-white transition-colors text-sm font-medium">
                        Contact
                    </Link>
                </div>

                <Link href="/#contact" className="btn-primary py-2 px-5 text-sm hover:scale-105 active:scale-95 transition-transform" aria-label="Get started with G7 Holdings">
                    Get Started
                </Link>
            </div>
        </motion.nav>
    );
};

"use client";

import Link from "next/link";
import {
    Instagram,
    Facebook,
    Linkedin,
    Mail,
    PhoneCall,
    MapPin,
    ArrowUpRight
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export const Footer = () => {
    return (
        <footer className="bg-black/40 border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Column 1: Info & Socials */}
                    <FadeIn className="flex flex-col gap-6">
                        <Link href="/" className="text-2xl font-outfit font-bold tracking-tight text-white hover:text-primary transition-colors">
                            G7 HOLDINGS
                        </Link>
                        <p className="text-secondary-text leading-relaxed font-inter max-w-sm">
                            Disciplined fintech engineering for the modern investor. We bridge the gap between complex market data and consistent algorithmic execution.
                        </p>
                        <div className="flex gap-4 items-center">
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </FadeIn>

                    {/* Column 2: Quick Links */}
                    <FadeIn delay={0.1}>
                        <h3 className="text-white font-outfit font-bold text-lg mb-8 uppercase tracking-widest">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About", href: "#about" },
                                { name: "Platform", href: "#platform" },
                                { name: "Contact", href: "#contact" },
                                { name: "FAQ", href: "#faq-heading" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-secondary-text hover:text-primary flex items-center gap-2 transition-colors group"
                                    >
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    {/* Column 3: Resources */}
                    <FadeIn delay={0.2}>
                        <h3 className="text-white font-outfit font-bold text-lg mb-8 uppercase tracking-widest">Resources</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Privacy Policy", href: "#" },
                                { name: "Terms of Service", href: "#" },
                                { name: "Risk Disclosure", href: "#" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-secondary-text hover:text-primary flex items-center gap-2 transition-colors group"
                                    >
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    {/* Column 4: Contact Info */}
                    <FadeIn delay={0.3}>
                        <h3 className="text-white font-outfit font-bold text-lg mb-8 uppercase tracking-widest">Contact Info</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <PhoneCall size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-secondary-text uppercase font-bold tracking-widest mb-1">Phone</p>
                                    <a href="tel:+919876543210" className="text-white hover:text-primary transition-colors font-medium">
                                        +91 98765 43210
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-secondary-text uppercase font-bold tracking-widest mb-1">Email</p>
                                    <a href="mailto:info@g7holdings.com" className="text-white hover:text-primary transition-colors font-medium">
                                        info@g7holdings.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-secondary-text uppercase font-bold tracking-widest mb-1">Office</p>
                                    <p className="text-white font-medium">Financial District, Hyderabad, India</p>
                                </div>
                            </li>
                        </ul>
                    </FadeIn>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-secondary-text text-sm">
                        © 2026 G7 Holdings. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-secondary-text">
                        <span className="text-primary italic font-medium">Fintech Excellence</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

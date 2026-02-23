"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/fade-in";
import { blogs } from "@/lib/blog-data";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogListing() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <FadeIn className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Insights & Updates</span>
                        <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-6">G7 Journal</h1>
                        <p className="text-xl text-secondary-text max-w-2xl mx-auto">
                            Deep dives into algorithmic strategies, risk management, and the future of systematic trading.
                        </p>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {blogs.map((blog, i) => (
                            <FadeIn key={blog.id} delay={i * 0.1}>
                                <Link href={`/blog/${blog.id}`} className="group block h-full">
                                    <div className="glass-card overflow-hidden h-full flex flex-col border-white/5 group-hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
                                        <div className="relative h-48 w-full bg-dark/50 overflow-hidden">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 rounded-full bg-brand-accent/40 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-brand-accent/30 shadow-lg">
                                                    {blog.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-8 flex flex-col flex-1">
                                            <div className="flex items-center gap-4 text-xs text-secondary-text mb-4">
                                                <span className="flex items-center gap-1.5"><Calendar size={14} /> {blog.date}</span>
                                                <span className="flex items-center gap-1.5"><Clock size={14} /> {blog.readTime}</span>
                                            </div>

                                            <h2 className="text-2xl font-outfit font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                                {blog.title}
                                            </h2>

                                            <p className="text-secondary-text text-sm leading-relaxed mb-6 line-clamp-3">
                                                {blog.excerpt}
                                            </p>

                                            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Image src={blog.author.avatar} alt={blog.author.name} width={32} height={32} className="rounded-full bg-white/5" />
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-bold text-white">{blog.author.name}</span>
                                                        <span className="text-[10px] text-secondary-text">{blog.author.role}</span>
                                                    </div>
                                                </div>
                                                <div className="text-primary group-hover:translate-x-1 transition-transform">
                                                    <ArrowRight size={18} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Newsletter Section */}
                    <FadeIn delay={0.4} className="mt-20">
                        <div className="max-w-4xl mx-auto glass-card p-12 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50" />
                            <h3 className="text-3xl font-outfit font-bold mb-4">Stay Ahead of the Curve</h3>
                            <p className="text-secondary-text mb-8 max-w-lg mx-auto">
                                Get monthly deep-dives on market psychology and algorithmic efficiency delivered to your inbox.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="name@email.com"
                                    className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary/50 transition-colors text-white"
                                />
                                <button className="btn-primary py-3 px-8 whitespace-nowrap">Subscribe</button>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </main>

            <Footer />
        </div>
    );
}

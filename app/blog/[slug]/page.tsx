"use client";

import { useParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/fade-in";
import { blogs } from "@/lib/blog-data";
import { ArrowLeft, Calendar, Clock, Share2, Tag } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

export default function BlogDetail() {
    const { slug } = useParams();
    const router = useRouter();
    const blog = blogs.find((b) => b.id === slug);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-white p-6">
                <div className="text-center">
                    <h1 className="text-4xl font-outfit font-bold mb-4">Post Not Found</h1>
                    <button onClick={() => router.push("/blog")} className="text-primary flex items-center gap-2 mx-auto">
                        <ArrowLeft size={18} /> Back to Blog
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
                style={{ scaleX }}
            />

            <main className="pt-32 pb-20">
                <article className="container mx-auto px-6 max-w-4xl">
                    <FadeIn>
                        <Link href="/blog" className="inline-flex items-center gap-2 text-secondary-text hover:text-primary transition-colors mb-8 group">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </Link>

                        <header className="mb-12">
                            <div className="flex items-center gap-4 text-sm text-primary font-bold uppercase tracking-widest mb-6">
                                <span>{blog.category}</span>
                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                <span className="text-secondary-text font-medium">{blog.readTime}</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-8 leading-[1.1]">
                                {blog.title}
                            </h1>

                            <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-white/10">
                                <div className="flex items-center gap-4">
                                    <img src={blog.author.avatar} alt={blog.author.name} className="w-12 h-12 rounded-full ring-2 ring-primary/20" />
                                    <div>
                                        <div className="font-bold text-white">{blog.author.name}</div>
                                        <div className="text-xs text-secondary-text">{blog.author.role}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 text-sm text-secondary-text">
                                    <div className="flex items-center gap-2"><Calendar size={18} /> {blog.date}</div>
                                    <button className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <Share2 size={18} /> Share
                                    </button>
                                </div>
                            </div>
                        </header>
                    </FadeIn>

                    {/* Featured Image Aspect Placeholder */}
                    <FadeIn delay={0.2}>
                        <div className="aspect-[21/9] w-full bg-gradient-to-br from-primary/10 via-secondary/5 to-dark rounded-3xl mb-16 overflow-hidden relative shadow-2xl">
                            <div className="absolute inset-0 bg-grid-white/[0.02]" />
                        </div>
                    </FadeIn>

                    {/* Content */}
                    <FadeIn delay={0.3}>
                        <div
                            className="prose prose-invert prose-lg max-w-none 
                prose-h2:font-outfit prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-p:text-secondary-text prose-p:leading-relaxed prose-p:mb-6
                prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic
                prose-strong:text-white"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </FadeIn>

                    {/* Footer Info */}
                    <FadeIn delay={0.4}>
                        <div className="mt-20 pt-12 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Tag size={18} className="text-primary" />
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs hover:border-primary/30 cursor-pointer">Finance</span>
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs hover:border-primary/30 cursor-pointer">Tech</span>
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs hover:border-primary/30 cursor-pointer">Wealth</span>
                                </div>
                            </div>
                        </div>

                        {/* Author Bio Box */}
                        <div className="mt-16 glass-card p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                            <img src={blog.author.avatar} alt={blog.author.name} className="w-24 h-24 rounded-full ring-4 ring-primary/20 bg-white/5" />
                            <div>
                                <h4 className="text-xl font-outfit font-bold mb-2">Written by {blog.author.name}</h4>
                                <p className="text-secondary-text text-sm leading-relaxed mb-4">
                                    Deeply passionate about systematic markets and the intersection of finance and machine learning. Leading the strategy team at G7 Holdings to deliver robust algorithmic solutions.
                                </p>
                                <div className="flex gap-4">
                                    <button className="text-xs text-primary hover:underline font-bold">Follow on Twitter</button>
                                    <button className="text-xs text-primary hover:underline font-bold">LinkedIn Profile</button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </article>
            </main>

            <Footer />
        </div>
    );
}

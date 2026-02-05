"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/fade-in";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  BarChart3,
  ShieldCheck,
  Cpu,
  Wallet,
  Zap,
  ChevronDown,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Flag,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { CustomDropdown } from "@/components/ui/custom-dropdown";

// --- Components for sections ---

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 md:pb-28 overflow-hidden bg-brand-deep" aria-label="Welcome to G7 Holdings">
    {/* Dynamic Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-accent rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-gold rounded-full blur-[180px]"
      />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now Serving 100+ Disciplined Traders
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-bold leading-[1.1] mb-8 tracking-tight">
              Build Your Second <br className="hidden md:block" />
              Income with <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">G7 Holdings</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-secondary-text max-w-2xl mb-10 leading-relaxed font-inter">
              Trading is not easy and involves risk. We use data-driven algorithmic systems to help you grow steadily.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button className="group relative btn-primary text-lg px-10 py-4 overflow-hidden" aria-label="Start your journey with us">
              <span className="relative z-10">Get Early Access</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="btn-secondary text-lg px-10 py-4 flex items-center justify-center gap-2 hover:bg-white/10 transition-all border-white/10" aria-label="Learn how our copy trading works">
              Explore Alpha <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
          </FadeIn>

          <FadeIn delay={0.6} className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4 text-sm text-secondary-text/60 font-medium font-inter">
            <div className="flex items-center gap-3 group cursor-default">
              <div className="p-1 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-dark transition-colors">
                <CheckCircle2 size={14} />
              </div>
              Structured systems
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <div className="p-1 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-dark transition-colors">
                <CheckCircle2 size={14} />
              </div>
              Risk-aware approach
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <div className="p-1 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-dark transition-colors">
                <CheckCircle2 size={14} />
              </div>
              Monthly withdrawals
            </div>
          </FadeIn>
        </div>

        <div className="flex-1 w-full max-w-2xl relative">
          <FadeIn direction="left" delay={0.4}>
            <div className="relative group p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl transition-all duration-700 hover:shadow-[0_0_50px_-12px_rgba(157,211,25,0.2)]">
              <div className="aspect-square md:aspect-[4/3] rounded-[2.3rem] bg-dark/80 flex items-center justify-center overflow-hidden relative">
                <svg
                  width="100%" height="100%" viewBox="0 0 400 300"
                  fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full p-12 relative z-10"
                  role="img" aria-label="Trading Logic Visualization"
                >
                  <defs>
                    <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9dd319" />
                      <stop offset="100%" stopColor="#f2d070" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Flow Pattern */}
                  <motion.rect
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    x="20" y="20" width="360" height="260" rx="20" stroke="url(#nodeGradient)" strokeDasharray="10 10"
                  />

                  {/* Nodes */}
                  <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                    <rect x="40" y="110" width="80" height="80" rx="20" fill="#12240e" stroke="#9dd319" strokeWidth="1.5" />
                    <text x="80" y="155" textAnchor="middle" fill="#9dd319" className="text-[10px] font-bold tracking-widest uppercase">Input</text>
                  </motion.g>

                  <motion.g animate={{ y: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}>
                    <rect x="160" y="90" width="100" height="120" rx="25" fill="#1a2f15" stroke="#f2d070" strokeWidth="1.5" style={{ filter: 'url(#glow)' }} />
                    <text x="210" y="155" textAnchor="middle" fill="#f2d070" className="text-[12px] font-black tracking-widest uppercase">Logic</text>
                  </motion.g>

                  <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
                    <rect x="300" y="110" width="80" height="80" rx="20" fill="#12240e" stroke="#9dd319" strokeWidth="1.5" />
                    <text x="340" y="155" textAnchor="middle" fill="#9dd319" className="text-[10px] font-bold tracking-widest uppercase">Result</text>
                  </motion.g>

                  {/* Lines */}
                  <motion.path
                    d="M120 150H160" stroke="url(#nodeGradient)" strokeWidth="2" strokeDasharray="5 5"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  />
                  <motion.path
                    d="M260 150H300" stroke="url(#nodeGradient)" strokeWidth="2" strokeDasharray="5 5"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  />

                  {/* Energy Pulses */}
                  <motion.circle
                    r="4" fill="#9dd319"
                    animate={{ cx: [120, 160, 260, 300], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ filter: 'url(#glow)' }}
                  />
                </svg>

                {/* Visual Depth Elements */}
                <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
              </div>

              {/* Float Tags */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 -right-4 px-4 py-2 rounded-xl bg-primary text-dark text-xs font-bold shadow-xl z-20"
              >
                +24% Avg Pro
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 -left-6 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs font-bold shadow-xl z-20"
              >
                99.9% Uptime
              </motion.div>
            </div>
          </FadeIn>

          {/* Background Glow */}
          <div className="absolute -top-10 -right-10 w-full h-full bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
        </div>
      </div>
    </div>
  </section>
);

const RealityCheckSection = () => (
  <section className="py-20 md:py-28 bg-white text-dark relative overflow-hidden" aria-labelledby="reality-check-heading">
    {/* Decorative Gradients */}
    <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-gold/10 rounded-full blur-[120px]" />
    </div>

    <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
      <FadeIn>
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground font-bold tracking-widest uppercase text-xs mb-4 block underline decoration-brand-accent/30 underline-offset-4">Disclaimer</span>
          <h2 id="reality-check-heading" className="text-3xl md:text-5xl font-outfit font-bold mb-8 text-dark">First, Let&apos;s Be Honest</h2>
          <p className="text-xl opacity-80 leading-relaxed">
            Trading is not a shortcut to easy money. There is risk, and there is reward. But risk and reward become manageable when you:
          </p>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {[
          { text: "Use proven strategies", icon: <ShieldCheck className="text-dark" /> },
          { text: "Keep emotions out", icon: <Zap className="text-dark" /> },
          { text: "Follow trading experts guidance", icon: <BarChart3 className="text-dark" /> },
          { text: "Stay consistent", icon: <TrendingUp className="text-dark" /> }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="h-full">
            <div className="bg-dark/5 backdrop-blur-sm border border-dark/10 rounded-2xl flex flex-col items-center text-center p-10 transition-all hover:bg-dark/10 h-full hover:shadow-xl hover:shadow-brand-accent/5">
              <div className="mb-6 p-4 bg-dark/5 rounded-full">{item.icon}</div>
              <p className="font-inter font-semibold leading-relaxed text-base">{item.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.6}>
        <p className="mt-16 text-dark font-bold text-lg">This is the foundation of the G7 Holdings system.</p>
      </FadeIn>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id="platform" className="py-20 md:py-28 bg-linear-to-b from-brand-deep via-[#12240e] to-brand-deep relative overflow-hidden" aria-labelledby="features-heading">
    {/* Animated Background Gradients */}
    <div className="absolute inset-0 pointer-events-none opacity-40">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-accent/10 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-gold/5 rounded-full blur-[150px]"
      />
    </div>

    <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
      <FadeIn className="mb-20">
        <h2 id="features-heading" className="text-3xl md:text-5xl font-outfit font-bold mb-6 text-white leading-tight">What We Help You Build</h2>
        <p className="text-xl text-brand-muted max-w-2xl mx-auto">An additional income stream built on systems and discipline.</p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "A System, Not Guesswork", desc: "Every trade is backed by a backtested strategy, not gut feelings or news hype.", icon: <Cpu size={32} /> },
          { title: "Automated Execution", desc: "Our systems run in the background, executing trades instantly without human delay.", icon: <Zap size={32} /> },
          { title: "Monthly Profit Withdrawals", desc: "Designed for steady growth with the discipline of regular, sustainable payouts.", icon: <Wallet size={32} /> }
        ].map((feature, i) => (
          <FadeIn key={i} delay={i * 0.2} className="h-full">
            <div className="glass-card h-full text-left flex flex-col items-start p-10 group hover:border-brand-accent/40 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04]">
              <div className="mb-8 p-4 bg-brand-accent/10 rounded-2xl text-brand-accent transition-all duration-500 group-hover:bg-brand-accent group-hover:text-brand-deep group-hover:shadow-[0_0_20px_rgba(157,211,25,0.4)]">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-outfit font-bold mb-4 text-white group-hover:text-brand-accent transition-colors">{feature.title}</h3>
              <p className="text-brand-muted leading-relaxed text-lg group-hover:text-brand-text-light transition-colors">{feature.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const RequirementsSection = () => (
  <section className="py-20 md:py-28 bg-white text-dark relative overflow-hidden" aria-labelledby="requirements-heading">
    {/* Dynamic Background Gradients */}
    <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-gold/20 rounded-full blur-[140px]" />
    </div>

    <div className="container mx-auto px-6 max-w-6xl relative z-10">
      <div className="bg-dark/[0.03] backdrop-blur-xl border border-dark/5 rounded-[3rem] p-12 md:p-20 overflow-hidden relative shadow-2xl shadow-dark/5">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Wallet size={160} className="text-dark" aria-hidden="true" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
            <FadeIn>
              <h2 id="requirements-heading" className="text-3xl md:text-5xl font-outfit font-bold mb-8 text-dark leading-tight">What You Need <br /> to Start</h2>
              <p className="text-lg opacity-70 mb-10 max-w-lg">We focus on seriousness and discipline. To participate in our copy trading strategy, you need:</p>

              <ul className="space-y-6">
                {[
                  "A demat account with a supported broker",
                  "Minimum capital requirement to handle margin",
                  "A patient, logic-first mindset",
                  "Understanding of risk management basics"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-brand-accent/20 p-1 rounded-full shadow-[0_0_10px_rgba(157,211,25,0.3)]">
                      <CheckCircle2 className="text-brand-accent" size={18} />
                    </div>
                    <span className="font-inter text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="flex-none text-center lg:text-left">
            <FadeIn direction="left">
              <div className="inline-block p-1 rounded-[2.5rem] bg-gradient-to-br from-brand-accent to-brand-gold shadow-2xl shadow-brand-accent/30">
                <div className="bg-light rounded-[2.3rem] px-12 py-10 md:px-14 md:py-12 text-center">
                  <p className="text-dark/60 text-sm uppercase font-black tracking-widest mb-3">Capital Requirement</p>

                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-5xl md:text-6xl font-outfit font-black text-dark">₹1L</span>
                    <span className="text-3xl md:text-4xl font-black text-brand-accent/50">-</span>
                    <span className="text-5xl md:text-6xl font-outfit font-black text-dark">₹10L</span>
                  </div>

                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-dark/5 shadow-sm">
                      <TrendingUp size={14} className="text-brand-accent" />
                      <p className="text-sm text-dark/80 font-bold font-inter">
                        Invest in multiples of <span className="text-dark">₹1 Lakh</span>
                      </p>
                    </div>
                    <p className="text-xs text-dark/50 font-bold uppercase tracking-wider">
                      Minimum Entry: ₹1,00,000
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-10 text-sm font-semibold opacity-70 flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck size={16} className="text-brand-accent" />
                Note: <span className="text-dark font-black underline decoration-brand-accent/30 underline-offset-4">Your capital stays with you. Always.</span>
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="py-20 md:py-28 bg-linear-to-b from-brand-deep via-[#11210d] to-brand-deep relative overflow-hidden">
    {/* Decorative Mesh Gradients */}
    <div className="absolute inset-0 pointer-events-none opacity-30">
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 rounded-full blur-[140px]" />
    </div>

    <div className="container mx-auto px-6 max-w-6xl relative z-10">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <FadeIn>
          <div className="bg-white/[0.03] backdrop-blur-md border border-red-500/10 rounded-[2.5rem] p-10 md:p-14 h-full hover:bg-white/[0.05] transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-10 flex items-center justify-between text-white">
              Manual Trading <XCircle className="text-red-500" size={32} />
            </h3>
            <ul className="space-y-6 text-brand-muted text-lg">
              <li className="flex items-start gap-4">❌ Driven by fear and greed</li>
              <li className="flex items-start gap-4">❌ Highly inconsistent results</li>
              <li className="flex items-start gap-4">❌ Takes up all your free time</li>
              <li className="flex items-start gap-4">❌ No clear mathematical edge</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-brand-accent/[0.02] backdrop-blur-md border border-brand-accent/20 rounded-[2.5rem] p-10 md:p-14 h-full shadow-2xl shadow-brand-accent/5 hover:bg-brand-accent/[0.05] transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-10 flex items-center justify-between text-white">
              G7 Holdings <CheckCircle2 className="text-brand-accent" size={32} />
            </h3>
            <ul className="space-y-6 text-brand-text-light text-lg">
              <li className="flex items-start gap-4">✅ Copy trading systems</li>
              <li className="flex items-start gap-4">✅ Trades run consistently</li>
              <li className="flex items-start gap-4">✅ Fits alongside your main job</li>
              <li className="flex items-start gap-4">✅ Built-in risk controls</li>
            </ul>
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={0.4} className="text-center mt-16">
        <p className="text-xl font-medium text-brand-gold italic opacity-90 max-w-3xl mx-auto">Success in markets is not about luck; it is about discipline across thousands of trades.</p>
      </FadeIn>
    </div>
  </section>
);

const AudienceFilterSection = () => (
  <section className="py-20 md:py-28 bg-white text-dark relative overflow-hidden">
    {/* Decorative Focal Light */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
      <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-brand-accent/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] bg-brand-gold/10 rounded-full blur-[120px]" />
    </div>

    <div className="container mx-auto px-6 max-w-6xl relative z-10">
      <FadeIn className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6 text-dark leading-tight">Is This Right for You?</h2>
        <p className="text-xl opacity-70 max-w-2xl mx-auto">Find out if our copy trading system works for your second income goals.</p>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <FadeIn>
          <div className="p-10 md:p-14 border-l-4 border-brand-accent/30 bg-dark/[0.02] backdrop-blur-md rounded-r-[2.5rem] h-full transition-all hover:bg-dark/[0.04] hover:shadow-2xl hover:shadow-brand-accent/5">
            <h3 className="text-3xl font-outfit font-bold mb-10 text-dark">Yes, if you...</h3>
            <ul className="space-y-5 opacity-80 text-lg font-medium">
              <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(157,211,25,0.8)]" /> Want a passive source of income</li>
              <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-brand-accent" /> Understand the value of automation</li>
              <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-brand-accent" /> Have long-term wealth perspective</li>
              <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-brand-accent" /> Value your time over screen hours</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="p-10 md:p-14 border-l-4 border-dark/10 bg-dark/[0.02] backdrop-blur-md rounded-r-[2.5rem] h-full transition-all hover:bg-dark/[0.04]">
            <h3 className="text-3xl font-outfit font-bold mb-10 text-dark opacity-60">No, if you...</h3>
            <ul className="space-y-5 opacity-60 text-lg font-medium">
              <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-dark/20" /> Want to get rich overnight</li>
              <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-dark/20" /> Cannot handle any trading risk</li>
              <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-dark/20" /> Want to manually control every trade</li>
              <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-dark/20" /> Don&apos;t have the minimum capital</li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section id="about" className="pt-20 md:pt-28 pb-12 md:pb-16 bg-linear-to-b from-brand-deep via-[#13260f] to-brand-deep relative overflow-hidden" aria-labelledby="trust-heading">
    {/* Decorative Glow */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-accent/5 rounded-full blur-[160px]" />
    </div>

    <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">
      <FadeIn>
        <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-black uppercase tracking-[0.2em] mb-10">
          <ShieldCheck size={16} aria-hidden="true" /> Regulatory Discipline
        </span>
        <h2 id="trust-heading" className="text-3xl md:text-6xl font-outfit font-bold mb-10 text-white tracking-tight">Who Is Behind G7 Holdings?</h2>
        <div className="max-w-4xl mx-auto space-y-8 text-brand-muted text-xl leading-relaxed font-medium">
          <p>
            G7 Holdings is a group of professional traders and market experts with years of hands-on experience across different market conditions.
          </p>
          <p>
            G7 Holdings focuses on transparent systems, clear rules, and strategies built on proven copy systems.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

const MissionVisionSection = () => (
  <section className="pt-12 md:pt-16 pb-20 md:pb-28 bg-linear-to-b from-brand-deep via-[#11210d] to-brand-deep overflow-hidden relative" aria-labelledby="mission-vision-heading">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 blur-[160px] -z-10 pointer-events-none" aria-hidden="true" />
    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-brand-gold/5 blur-[160px] -z-10 pointer-events-none" aria-hidden="true" />

    <div className="container mx-auto px-6 relative z-10 max-w-4xl">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Mission Card */}
        <FadeIn className="h-full">
          <div className="glass-card h-full text-left flex flex-col items-start p-8 md:p-10 group hover:border-brand-accent/40 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04]">
            <div className="mb-6 p-3 bg-brand-accent/10 rounded-[1.2rem] text-brand-accent transition-all duration-500 group-hover:bg-brand-accent group-hover:text-brand-deep group-hover:shadow-[0_0_20px_rgba(157,211,25,0.4)]">
              <Flag size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-4 text-white group-hover:text-brand-accent transition-colors">Our Mission</h3>
            <p className="text-brand-muted leading-relaxed text-xl group-hover:text-brand-text-light transition-colors">
              To help individuals build a disciplined and consistent second source of income through G7 Holdings copy trading and portfolio management systems.
            </p>
          </div>
        </FadeIn>

        {/* Vision Card */}
        <FadeIn delay={0.2} className="h-full">
          <div className="glass-card h-full text-left flex flex-col items-start p-8 md:p-10 group hover:border-brand-accent/40 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04]">
            <div className="mb-6 p-3 bg-brand-accent/10 rounded-[1.2rem] text-brand-accent transition-all duration-500 group-hover:bg-brand-accent group-hover:text-brand-deep group-hover:shadow-[0_0_20px_rgba(157,211,25,0.4)]">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-4 text-white group-hover:text-brand-accent transition-colors">Our Vision</h3>
            <p className="text-brand-muted leading-relaxed text-xl group-hover:text-brand-text-light transition-colors">
              To help our individuals enjoy financial peace of mind with a reliable second source of income.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Where is my money kept?",
      a: "Your capital stays in your own demat account. G7 Holdings never takes control of your funds. We only use API access to execute trades according to our copy trading system."
    },
    {
      q: "Is profit guaranteed?",
      a: "No. Trading involves market risk. Our systems are designed for high-probability setups, but market conditions change. We focus on risk management first."
    },
    {
      q: "Can I withdraw my money anytime?",
      a: "Yes. Since the money is in your own broker account, you have 100% control over your capital at all times."
    },
    {
      q: "How much time do I need to spend?",
      a: "Once the setup is complete, G7 Holdings system manages entries, exits, and risk. You just monitor the performance."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-linear-to-b from-brand-deep via-[#12240e] to-brand-deep relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Decorative Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-brand-accent/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] bg-brand-gold/5 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <FadeIn className="text-center mb-20">
          <h2 id="faq-heading" className="text-3xl md:text-6xl font-outfit font-bold mb-6 text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xl text-brand-muted font-medium">Clear answers to your most common questions.</p>
        </FadeIn>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i}>
              <FadeIn delay={i * 0.1}>
                <div
                  className={`border rounded-3xl overflow-hidden transition-all duration-500 backdrop-blur-md ${openIndex === i ? 'bg-brand-accent/[0.07] border-brand-accent/40 shadow-2xl shadow-brand-accent/10' : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className={`font-outfit font-bold text-xl md:text-2xl transition-colors duration-300 ${openIndex === i ? 'text-brand-accent' : 'text-white'}`}>{faq.q}</span>
                    <div className={`p-2 rounded-full transition-all duration-500 shadow-lg ${openIndex === i ? 'bg-brand-accent text-brand-deep rotate-180 shadow-brand-accent/30' : 'bg-white/10 text-white'}`}>
                      <ChevronDown size={24} aria-hidden="true" />
                    </div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                  >
                    <div className="p-8 pt-0 text-brand-muted leading-relaxed text-lg font-medium border-t border-white/5 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-linear-to-b from-brand-deep via-[#11210c] to-brand-deep relative overflow-hidden" aria-labelledby="contact-heading">
    {/* Decorative Background Glows */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-accent/5 rounded-full blur-[180px] -z-10" />

    <div className="container mx-auto px-6 max-w-6xl relative z-10">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Contact Info Side */}
        <div className="flex-1">
          <FadeIn>
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block underline decoration-brand-accent/30 underline-offset-4">Get in Touch</span>
            <h2 id="contact-heading" className="text-4xl md:text-6xl font-outfit font-bold mb-8 text-white leading-tight">Let&apos;s Discuss Your <br /> Wealth Strategy</h2>
            <p className="text-xl text-brand-muted mb-12 max-w-lg leading-relaxed">
              Whether you have questions about our algorithms or want to join our elite community, our team is ready to assist.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Mail size={20} />, title: "Email Us", detail: "info@g7holdings.com", sub: "Replies within 24h" },
                { icon: <Phone size={20} />, title: "Call Support", detail: "+91 98765 43210", sub: "Mon-Fri, 9am - 6pm" },
                { icon: <MessageSquare size={20} />, title: "Direct Chat", detail: "WhatsApp Support", sub: "+91 98765 43211" },
                { icon: <MapPin size={20} />, title: "Our Office", detail: "Hyderabad, India", sub: "Financial District" }
              ].map((item, i) => (
                <div key={i} className="flex flex-row items-center gap-5 p-5 glass-card rounded-2xl hover:bg-white/[0.04] transition-all duration-300 group/card">
                  <div className="p-3 rounded-full bg-white/5 text-white group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-outfit font-bold text-white text-sm mb-0.5">{item.title}</h3>
                    <p className="text-brand-text-light font-bold text-[13px] leading-tight break-all">{item.detail}</p>
                    <p className="text-[10px] text-brand-muted mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Contact Form Side */}
        <div className="flex-1">
          <FadeIn delay={0.2}>
            <div className="glass-card p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent opacity-50" />
              <h3 className="text-2xl font-outfit font-bold mb-8 text-white">Send Us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-muted uppercase tracking-widest px-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-muted uppercase tracking-widest px-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 transition-colors" />
                  </div>
                </div>
                <CustomDropdown
                  label="Subject"
                  options={[
                    "Algorithmic Trading Inquiry",
                    "Investment Opportunity",
                    "Technical Support",
                    "Other"
                  ]}
                />
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-muted uppercase tracking-widest px-1">Message</label>
                  <textarea rows={4} placeholder="Tell us about your trading goals..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg font-bold shadow-xl shadow-brand-accent/20 group-hover:scale-[1.02] transition-transform">
                  Send Your Message
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

const FooterCTA = () => (
  <section className="py-20 md:py-28 relative overflow-hidden bg-linear-to-b from-brand-deep via-[#11210c] to-black">
    {/* Animated background circles */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-accent/10 rounded-full blur-[180px] -z-10 animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 rounded-full blur-[140px] -z-10" />

    <div className="container mx-auto px-6 max-w-5xl">
      <FadeIn>
        <div className="glass-card relative overflow-hidden p-12 md:p-20 text-center border-brand-accent/20 bg-white/[0.04] backdrop-blur-3xl rounded-[3rem] shadow-2xl shadow-brand-accent/5 group">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-8 text-white tracking-tight leading-tight group-hover:scale-[1.01] transition-transform duration-700">
              Ready to Take <br className="hidden md:block" /> the Next Step?
            </h2>
            <p className="text-xl text-brand-muted mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Join a disciplined community of risk-aware traders using technology to grow wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-brand-accent/30 hover:scale-[1.05] active:scale-95 transition-all duration-500"
                aria-label="Contact G7 Holdings to get started"
              >
                Get Started Now
              </button>
              <p className="text-sm font-semibold text-brand-gold italic bg-brand-gold/10 px-4 py-2 rounded-full border border-brand-gold/20">
                Limited openings for team
              </p>
            </div>
          </div>

          {/* Subtle decorative glow inside card */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-[100px] group-hover:opacity-80 transition-opacity duration-700" />
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-[100px] group-hover:opacity-60 transition-opacity duration-700" />
        </div>
      </FadeIn>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <header>
        <Navbar />
      </header>
      <main id="main-content">
        <HeroSection />
        <RealityCheckSection />
        <FeaturesSection />
        <RequirementsSection />
        <ComparisonSection />
        <AudienceFilterSection />
        <TrustSection />
        <MissionVisionSection />
        <FAQSection />
        <ContactSection />
      </main>
      <footer>
        <FooterCTA />
        <Footer />
      </footer>
    </div>
  );
}

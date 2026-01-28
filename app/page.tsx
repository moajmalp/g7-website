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
  Flag,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// --- Components for sections ---

const HeroSection = () => (
  <section className="relative min-h-[100vh] flex items-center pt-32 pb-10 overflow-hidden bg-dark" aria-label="Welcome to G7 Holdings">
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
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary rounded-full blur-[180px]"
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
              Build a Second <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">Income with Copy</span> <br />
              Trading
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-secondary-text max-w-2xl mb-10 leading-relaxed font-inter">
              We use structured trading systems to remove emotion and execute disciplined strategies for steady growth.
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
  <section className="py-24 bg-light text-dark" aria-labelledby="reality-check-heading">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <FadeIn>
        <span className="text-secondary-foreground font-bold tracking-widest uppercase text-xs mb-4 block">Disclaimer</span>
        <h2 id="reality-check-heading" className="text-3xl md:text-5xl font-outfit font-bold mb-8 text-dark">First, Let&apos;s Be Honest</h2>
        <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">
          Trading is not a shortcut to easy money. There is risk, and there is reward. But risk and reward become manageable when you
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {[
          { text: "Use proven strategies", icon: <ShieldCheck className="text-dark" /> },
          { text: "Keep emotions out", icon: <Zap className="text-dark" /> },
          { text: "Follow trading experts guidance", icon: <BarChart3 className="text-dark" /> },
          { text: "Stay consistent", icon: <TrendingUp className="text-dark" /> }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="h-full">
            <div className="bg-dark/5 border border-dark/10 rounded-2xl flex flex-col items-center text-center p-8 transition-all hover:bg-dark/10 h-full">
              <div className="mb-4">{item.icon}</div>
              <p className="font-inter font-medium leading-relaxed text-sm md:text-base">{item.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.6}>
        <p className="mt-12 text-dark font-bold">This is the foundation of the G7 Holdings system.</p>
      </FadeIn>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id="platform" className="py-24 bg-gradient-to-b from-dark to-dark/90" aria-labelledby="features-heading">
    <div className="container mx-auto px-6 text-center">
      <FadeIn>
        <h2 id="features-heading" className="text-3xl md:text-5xl font-outfit font-bold mb-4">What We Help You Build</h2>
        <p className="text-xl text-secondary-text mb-16">An additional income stream built on systems and discipline.</p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "A System, Not Guesswork", desc: "Every trade is backed by a backtested strategy, not gut feelings or news hype.", icon: <Cpu size={32} /> },
          { title: "Automated Execution", desc: "Our systems run in the background, executing trades instantly without human delay.", icon: <Zap size={32} /> },
          { title: "Monthly Profit Withdrawals", desc: "Designed for steady growth with the discipline of regular, sustainable payouts.", icon: <Wallet size={32} /> }
        ].map((feature, i) => (
          <FadeIn key={i} delay={i * 0.2} className="h-full">
            <div className="glass-card h-full text-left flex flex-col items-start p-10 group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6 p-3 bg-primary/10 rounded-xl text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-outfit font-bold mb-4">{feature.title}</h3>
              <p className="text-secondary-text leading-relaxed">{feature.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const RequirementsSection = () => (
  <section className="py-24 bg-light text-dark" aria-labelledby="requirements-heading">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto bg-dark/5 border border-dark/10 rounded-3xl p-12 md:p-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Wallet size={120} className="text-dark" aria-hidden="true" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <FadeIn>
              <h2 id="requirements-heading" className="text-3xl md:text-4xl font-outfit font-bold mb-6 text-dark">What You Need to Start</h2>
              <p className="opacity-70 mb-8">We focus on seriousness and discipline. To participate in our algorithmic strategy, you need:</p>

              <ul className="space-y-6">
                {[
                  "A demat account with a supported broker",
                  "Minimum capital requirement to handle margin",
                  "A patient, logic-first mindset",
                  "Understanding of risk management basics"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-dark mt-1 shrink-0" size={20} />
                    <span className="font-inter text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="flex-none text-center">
            <FadeIn direction="left">
              <div className="inline-block p-1 rounded-3xl bg-gradient-to-br from-primary to-secondary">
                <div className="bg-light rounded-[22px] px-12 py-10">
                  <p className="text-dark/60 text-sm uppercase font-bold tracking-widest mb-2">Starting Capital</p>
                  <div className="text-5xl font-outfit font-black text-dark mb-4">₹1,00,000</div>
                  <p className="text-sm text-dark/80 italic">Minimum commitment</p>
                </div>
              </div>
              <p className="mt-8 text-sm font-medium opacity-70">
                Note: <span className="text-dark font-bold">Your capital stays with you. Always.</span>
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <FadeIn>
          <div className="fintech-card p-10 border-red-500/20 bg-red-500/5 h-full">
            <h3 className="text-2xl font-outfit font-bold mb-8 flex items-center justify-between">
              Manual Trading <XCircle className="text-red-500" />
            </h3>
            <ul className="space-y-6 text-secondary-text">
              <li className="flex items-start gap-3">❌ Driven by fear and greed</li>
              <li className="flex items-start gap-3">❌ Highly inconsistent results</li>
              <li className="flex items-start gap-3">❌ Takes up all your free time</li>
              <li className="flex items-start gap-3">❌ No clear mathematical edge</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="fintech-card p-10 border-primary/20 bg-primary/5 h-full">
            <h3 className="text-2xl font-outfit font-bold mb-8 flex items-center justify-between">
              Algorithmic Trading <CheckCircle2 className="text-primary" />
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">✅ Copy trading systems</li>
              <li className="flex items-start gap-3">✅ Trades run consistently</li>
              <li className="flex items-start gap-3">✅ Fits alongside your main job</li>
              <li className="flex items-start gap-3">✅ Built-in risk controls</li>
            </ul>
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={0.4} className="text-center mt-12">
        <p className="text-lg font-medium text-secondary italic">Success in markets is not about luck; it is about discipline across thousands of trades.</p>
      </FadeIn>
    </div>
  </section>
);

const AudienceFilterSection = () => (
  <section className="py-24 bg-light text-dark">
    <div className="container mx-auto px-6">
      <FadeIn className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4 text-dark">Is This Right for You?</h2>
        <p className="text-xl opacity-70 max-w-2xl mx-auto">Find out if our copy trading system works for your second income goals.</p>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <FadeIn>
          <div className="p-8 border-l-4 border-dark">
            <h3 className="text-3xl font-outfit font-bold mb-8 text-dark">Yes, if you...</h3>
            <ul className="space-y-4 opacity-80">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-dark" /> Want a passive source of income</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-dark" /> Understand the value of automation</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-dark" /> Have long-term wealth perspective</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-dark" /> Value your time over screen hours</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="p-8 border-l-4 border-dark/30">
            <h3 className="text-3xl font-outfit font-bold mb-8 text-dark">No, if you...</h3>
            <ul className="space-y-4 opacity-80">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-dark/30" /> Want to get rich overnight</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-dark/30" /> Cannot handle any trading risk</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-dark/30" /> Want to manually control every trade</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-dark/30" /> Don&apos;t have the minimum capital</li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section id="about" className="py-24" aria-labelledby="trust-heading">
    <div className="container mx-auto px-6 text-center">
      <FadeIn>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
          <ShieldCheck size={14} aria-hidden="true" /> Regulatory Discipline
        </span>
        <h2 id="trust-heading" className="text-3xl md:text-5xl font-outfit font-bold mb-8">Who Is Behind G7 Holdings?</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-secondary-text text-lg leading-relaxed">
          <p>
            We are a group of engineers and traders who believe that the markets are too fast and too complex for manual emotional trading.
          </p>
          <p>
            G7 Holdings was founded on the principle of transparency. We don&apos;t hide behind complex jargon. We build systems that follow mathematical proven advantages.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

const MissionVisionSection = () => (
  <section className="py-24 bg-dark overflow-hidden relative" aria-labelledby="mission-vision-heading">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-10 pointer-events-none" aria-hidden="true" />
    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary/5 blur-[120px] -z-10 pointer-events-none" aria-hidden="true" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {/* Mission Card */}
        <FadeIn className="h-full">
          <div className="glass-card h-full text-left flex flex-col items-start p-10 group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
            <div className="mb-6 p-3 bg-primary/10 rounded-xl text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Flag size={32} />
            </div>
            <h3 className="text-2xl font-outfit font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-secondary-text leading-relaxed text-lg">
              To help individuals build a disciplined and consistent second source of income through G7 Holdings copy trading and portfolio management systems.
            </p>
          </div>
        </FadeIn>

        {/* Vision Card */}
        <FadeIn delay={0.2} className="h-full">
          <div className="glass-card h-full text-left flex flex-col items-start p-10 group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
            <div className="mb-6 p-3 bg-primary/10 rounded-xl text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-2xl font-outfit font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-secondary-text leading-relaxed text-lg">
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
    <section className="py-24" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl md:text-5xl font-outfit font-bold mb-4">Frequently Asked Questions</h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i}>
              <FadeIn delay={i * 0.1}>
                <div
                  className={`fintech-card overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-primary/50' : 'hover:border-white/20'}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/50"
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="font-outfit font-bold text-lg">{faq.q}</span>
                    <ChevronDown className={`text-primary transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                  >
                    <div className="p-6 pt-0 text-secondary-text leading-relaxed">
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

const FooterCTA = () => (
  <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-black/50">
    {/* Animated background circles */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
    <div className="container mx-auto px-6 text-center">
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-8">Ready to Take the Next Step?</h2>
        <p className="text-xl text-secondary-text mb-12 max-w-2xl mx-auto">
          Join a disciplined community of risk-aware traders using technology to grow wealth.
        </p>
        <button
          className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-transform"
          aria-label="Contact G7 Holdings to get started"
        >
          Contact Us
        </button>
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
      </main>
      <footer>
        <FooterCTA />
        <Footer />
      </footer>
    </div>
  );
}

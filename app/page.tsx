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
  ChevronDown
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// --- Components for sections ---

const HeroSection = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" aria-label="Welcome to G7 Holdings">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 text-center md:text-left">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-outfit font-bold leading-[1.1] mb-6 tracking-tight">
              Build Your Second Source of <span className="text-primary italic">Income</span> with Algorithmic Trading
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-secondary-text max-w-2xl mb-10 leading-relaxed">
              Trading is not easy and involves risk. We use data-driven algorithmic systems to help you grow steadily through disciplined execution.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform" aria-label="Start your journey with us">
              Let’s Start
            </button>
            <button className="btn-secondary text-lg px-8 py-4 flex items-center gap-2 hover:bg-secondary/10 transition-colors" aria-label="Learn how our algorithmic trading works">
              Learn how it works <ArrowRight size={20} aria-hidden="true" />
            </button>
          </FadeIn>
          <FadeIn delay={0.6} className="mt-12 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-sm text-secondary-text/80 font-medium font-inter">
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" aria-hidden="true" /> Structured systems</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" aria-hidden="true" /> Risk-aware approach</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" aria-hidden="true" /> Monthly withdrawals</span>
          </FadeIn>
        </div>

        <div className="flex-1 w-full max-w-xl lg:max-w-2xl">
          <FadeIn direction="left" delay={0.4}>
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-video fintech-card flex items-center justify-center overflow-hidden border-primary/20 shadow-2xl shadow-primary/5">
              <svg
                width="100%" height="100%" viewBox="0 0 400 300"
                fill="none" xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full p-8"
                role="img" aria-label="Visual representation of Algorithmic Trading Flow from Data to Rules to Automated Execution"
              >
                {/* Data Node */}
                <motion.rect
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  x="40" y="120" width="80" height="60" rx="12" fill="#1e3d18" stroke="#9dd319" strokeWidth="2"
                />
                <text x="80" y="155" textAnchor="middle" fill="#f1e8cb" className="text-xs font-bold font-inter tracking-widest">DATA</text>

                {/* Arrow 1 path */}
                <path d="M120 150H160" stroke="#9dd319" strokeWidth="1" strokeOpacity="0.3" aria-hidden="true" />
                <motion.path
                  d="M120 150H160" stroke="#9dd319" strokeWidth="2" strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  aria-hidden="true"
                />

                {/* Rules Node */}
                <motion.rect
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  x="160" y="100" width="100" height="100" rx="16" fill="#1e3d18" stroke="#f2d070" strokeWidth="2"
                />
                <text x="210" y="155" textAnchor="middle" fill="#f1e8cb" className="text-xs font-bold font-inter tracking-widest">RULES</text>

                {/* Arrow 2 path */}
                <path d="M260 150H300" stroke="#9dd319" strokeWidth="1" strokeOpacity="0.3" aria-hidden="true" />
                <motion.path
                  d="M260 150H300" stroke="#9dd319" strokeWidth="2" strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  aria-hidden="true"
                />

                {/* Execution Node */}
                <motion.rect
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  x="300" y="120" width="80" height="60" rx="12" fill="#1e3d18" stroke="#9dd319" strokeWidth="2"
                />
                <text x="340" y="155" textAnchor="middle" fill="#f1e8cb" className="text-xs font-bold font-inter tracking-widest">EXECUTION</text>

                {/* Animated Particles */}
                <motion.circle
                  cx="120" cy="150" r="3" fill="#9dd319"
                  animate={{ cx: [120, 160, 260, 300] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                <motion.circle
                  cx="120" cy="150" r="3" fill="#f2d070"
                  animate={{ cx: [120, 160, 260, 300] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1.5, ease: "easeInOut" }}
                  aria-hidden="true"
                />
              </svg>
              {/* Decorative background grid */}
              <div className="absolute inset-0 z-[-1] opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#9dd319 1px, transparent 1px)', backgroundSize: '24px 24px' }} aria-hidden="true" />
            </div>
          </FadeIn>
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
        <h2 id="reality-check-heading" className="text-3xl md:text-5xl font-outfit font-bold mb-8">First, Let&apos;s Be Honest</h2>
        <p className="text-xl opacity-80 mb-12">
          Trading is not a shortcut to easy money. There is risk. And profits are never guaranteed.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {[
          { text: "Decisions are based on data", icon: <BarChart3 className="text-dark" /> },
          { text: "Emotions are removed", icon: <Zap className="text-dark" /> },
          { text: "Rules are followed consistently", icon: <ShieldCheck className="text-dark" /> }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.2}>
            <div className="bg-dark/5 border border-dark/10 rounded-2xl flex flex-col items-center text-center p-8 transition-all hover:bg-dark/10">
              <div className="mb-4">{item.icon}</div>
              <p className="font-inter font-medium leading-relaxed">{item.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.6}>
        <p className="mt-12 text-dark font-bold">This is the foundation of algorithmic trading.</p>
      </FadeIn>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id="platform" className="py-24 bg-gradient-to-b from-dark to-dark/90" aria-labelledby="features-heading">
    <div className="container mx-auto px-6 text-center">
      <FadeIn>
        <h2 id="features-heading" className="text-3xl md:text-5xl font-outfit font-bold mb-4">What We Help You Build</h2>
        <p className="text-xl text-secondary-text mb-16">A second source of income, not a full-time trading job.</p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "A System, Not Guesswork", desc: "Every trade is backed by a backtested strategy, not gut feelings or news hype.", icon: <Cpu size={32} /> },
          { title: "Automated Execution", desc: "Our systems run in the background, executing trades instantly without human delay.", icon: <Zap size={32} /> },
          { title: "Monthly Profit Withdrawals", desc: "Designed for steady growth with the discipline of regular, sustainable payouts.", icon: <Wallet size={32} /> }
        ].map((feature, i) => (
          <FadeIn key={i} delay={i * 0.2}>
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
              <h2 id="requirements-heading" className="text-3xl md:text-4xl font-outfit font-bold mb-6">What You Need to Start</h2>
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
              <li className="flex items-start gap-3">✅ Driven by data and rules</li>
              <li className="flex items-start gap-3">✅ Consistent execution of edge</li>
              <li className="flex items-start gap-3">✅ 100% passive; focus on your job</li>
              <li className="flex items-start gap-3">✅ Built-in risk protection</li>
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
      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <FadeIn>
          <div className="p-8 border-l-4 border-dark">
            <h3 className="text-3xl font-outfit font-bold mb-8">Yes, if you...</h3>
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
            <h3 className="text-3xl font-outfit font-bold mb-8">No, if you...</h3>
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
  <section className="py-24 bg-light text-dark">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <FadeIn>
          <div className="bg-dark text-light p-10 h-full rounded-2xl shadow-xl">
            <h3 className="text-2xl font-outfit font-bold mb-4 text-secondary">Our Mission</h3>
            <p className="opacity-80 text-lg">
              To democratize algorithmic trading for retail investors by providing institutional-grade systems that promote disciplined wealth creation.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="bg-white border border-dark/10 p-10 h-full rounded-2xl shadow-xl">
            <h3 className="text-2xl font-outfit font-bold mb-4 text-dark">Our Vision</h3>
            <p className="text-dark/70 text-lg font-medium">
              To build a future where data-driven investment is the standard, allowing individuals to grow their capital while focusing on their life and work.
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
      a: "Your capital stays in your own demat account. G7 Holdings never takes control of your funds. We only use API access to execute trades as per our algorithm."
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
      a: "Almost zero. Once the setup is complete, the algorithm handles entry, exit, and risk management. You simply monitor the performance."
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

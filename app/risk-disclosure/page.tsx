"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/fade-in";
import { ShieldAlert } from "lucide-react";

export default function RiskDisclosurePage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-inter">
            <Navbar />

            <main className="pt-32 pb-20 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20">
                    <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-gold/5 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center p-3 rounded-full bg-red-500/10 text-red-500 mb-6">
                                <ShieldAlert size={32} />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-6 text-white">Risk Disclosures</h1>
                            <p className="text-xl text-secondary-text max-w-2xl mx-auto">
                                Important information regarding the risks associated with securities trading and our services.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="glass-card p-8 md:p-12 space-y-8 text-secondary-text leading-relaxed text-lg border-white/5">

                            <div className="space-y-4">
                                <p>
                                    <strong className="text-white">Investment in securities market is subject to market risk, we do not offer any guaranteed profit service.</strong> Before taking Expert Research & any services with Stock Wyse, Client should read disclaimer, terms and conditions, Disclosure and refund policy of the company.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p>
                                    We do not accept advisory fee in any personal or Individual bank account, any payment made should be in favor of <strong className="text-white">Bilal Hussain Sadiq Hussain Syed</strong>. All trades will be exclusively on specific Research of Stock Wyse; no Research should be taken from anyone else by client.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p>
                                    <strong className="text-white">Risk of loss in trading & investment can be substantial and can even wipe-out complete capital at stake.</strong> Investment in securities market are subject to market risks, you are requested to carefully consider whether trading/investment is appropriate for you.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p>
                                    Stock Wyse attempts to provide the best suitable research & trading ideas as per Technical and Derivative Analysis. <strong className="text-white">Trade as per personal risk-appetite & with strict stop-losses.</strong> Stock Wyse and employees shall not be liable for losses, if any, incurred by you.
                                </p>
                            </div>

                            <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-white font-medium">
                                    Stock Wyse, its owners, employees, partners, and associates shall NOT be responsible or liable for any financial loss, capital loss, profit loss, trading loss, or investment loss of any kind. All trading and investment decisions are taken solely at the client&apos;s own risk and responsibility. Client fully agrees that Stock Wyse holds no responsibility for any loss arising from trading in the securities market under any circumstances.
                                </p>
                            </div>

                        </div>
                    </FadeIn>
                </div>
            </main>

            <Footer />
        </div>
    );
}

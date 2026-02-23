"use client";

import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export function FramerProvider({ children }: { children: ReactNode }) {
    return (
        <LazyMotion features={domAnimation}>
            <AnimatePresence mode="wait">
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ willChange: "opacity" }}
                >
                    {children}
                </m.div>
            </AnimatePresence>
        </LazyMotion>
    );
}

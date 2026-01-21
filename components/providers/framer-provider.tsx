"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export function FramerProvider({ children }: { children: ReactNode }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

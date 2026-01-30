"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CustomDropdownProps {
    options: string[];
    label: string;
    defaultValue?: string;
}

export const CustomDropdown = ({ options, label, defaultValue }: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defaultValue || options[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="space-y-2 relative" ref={dropdownRef}>
            <label className="text-xs font-bold text-brand-muted uppercase tracking-widest px-1">{label}</label>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 transition-all cursor-pointer flex justify-between items-center hover:bg-white/10 group"
            >
                <span className="font-medium">{selected}</span>
                <ChevronDown size={18} className={`text-brand-muted transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-accent" : ""}`} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-2 bg-brand-deep/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                    >
                        <div className="max-h-60 overflow-y-auto custom-scrollbar">
                            {options.map((option) => (
                                <div
                                    key={option}
                                    onClick={() => {
                                        setSelected(option);
                                        setIsOpen(false);
                                    }}
                                    className={`px-4 py-3 cursor-pointer transition-colors hover:bg-brand-accent/10 hover:text-brand-accent ${selected === option ? "bg-brand-accent/20 text-brand-accent" : "text-white/80"
                                        }`}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hidden input for form submission if needed */}
            <input type="hidden" name="subject" value={selected} />
        </div>
    );
};

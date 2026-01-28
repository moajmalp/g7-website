import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-deep": "#183113",
                "brand-accent": "#9dd319",
                "brand-gold": "#f2d070",
                "brand-text-light": "#f1e8cb",
                "brand-muted": "#acb98b",
                background: "#183113",
                foreground: "#f1e8cb",
            },
            fontFamily: {
                sans: ["var(--font-outfit)", "ui-sans-serif", "system-ui"],
                heading: ["var(--font-jakarta)", "ui-sans-serif", "system-ui"],
            },
        },
    },
    plugins: [],
};

export default config;

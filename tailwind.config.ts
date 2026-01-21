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
                background: "#183113", // Primary Background (Deep Forest Green)
                foreground: "#f1e8cb", // Primary Text (White Rock)
                primary: {
                    DEFAULT: "#9dd319", // Primary Accent (Atlantis Green)
                    foreground: "#183113",
                },
                secondary: {
                    DEFAULT: "#f2d070", // Secondary Accent (Goldenrod)
                    foreground: "#183113",
                },
                "secondary-text": "#acb98b", // Secondary Text
                accent: {
                    DEFAULT: "#9dd319",
                    golden: "#f2d070",
                },
            },
            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
                outfit: ["var(--font-outfit)", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;

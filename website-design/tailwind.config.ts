import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                isefy: {
                    purple: "var(--isefy-purple)",
                    "dark-purple": "var(--isefy-dark-purple)",
                    blue: "var(--isefy-blue)",
                    "dark-blue": "var(--isefy-dark-blue)",
                },
                accent: "var(--accent-color)",
                gray: {
                    light: "var(--bg-light)",
                    border: "var(--border-color)",
                    text: "var(--text-light)",
                    main: "var(--text-main)",
                }
            },
        },
    },
    plugins: [],
};
export default config;

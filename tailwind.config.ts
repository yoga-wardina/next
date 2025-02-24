import type { Config } from "tailwindcss";

export default {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                blue: {
                    primary: "#5865F2",
                },
                dark: {
                    primary: "#313338",
                    1: "#2B2D31",
                    2: "#232428",
                    3: "#1E1F22",
                    input: "#111214",
                },
                grey: {
                    primary: "#B5BAC1",
                    secondary: "#949BA4",
                    hover: "#777c88",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;

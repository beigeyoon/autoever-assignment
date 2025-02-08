import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        background: "var(--background)",
      },
      fontFamily: {
        kiaBold: ['var(--font-kia-bold)'],
        kiaRegular: ['var(--font-kia-regular)']
      }
    },
  },
  plugins: [],
} satisfies Config;

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
      },
      screens: {
        'sm': { max: '743px' },
        'md': { min: '744px', max: '1023px' },
        'md-down': { max: '1023px' },
        'lg': { min: '1024px' },
      },
      backgroundImage: {
        'hamburger-gradient': 'linear-gradient(transparent 9px, #000 0, #000 11px, transparent 0)',
      },
      transitionTimingFunction: {
        'cubic-primary': 'cubic-bezier(1, 0, .2, 1)',
      }
    },
  },
  plugins: [],
} satisfies Config;

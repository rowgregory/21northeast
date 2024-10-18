import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        '11': '0.6875rem',
        '13': '0.8125rem',
        '15': '0.9375rem',
      },
      fontFamily: {
        Poppins: [`"Poppins", sans-serif`],
      },
    },
  },
  plugins: [],
};
export default config;

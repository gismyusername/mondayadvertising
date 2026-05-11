import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f3f1ff",
          100: "#e9e4ff",
          200: "#d4ccff",
          300: "#b3a3ff",
          400: "#8d72ff",
          500: "#6b48ff",
          600: "#5a32f0",
          700: "#4a25cc",
          800: "#3c1fa3",
          900: "#2f1880",
          950: "#1c0e52",
        },
        ink: {
          900: "#0a0a14",
          800: "#11111e",
          700: "#191929",
          600: "#262638",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(107,72,255,0.35), 0 20px 60px -20px rgba(107,72,255,0.5)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(107,72,255,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;

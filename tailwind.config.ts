import type { Config } from "tailwindcss";

/**
 * Brand palette = "Stone & Cedar".
 * A grounded, premium craftsman system for an established family hardscaping company.
 * Deep evergreen is the structural anchor (large fields, footer, hero scrim); honed
 * limestone is the page base (cool-stone, not creamy); warm cedar is the single accent
 * and CTA — wood/earth warmth, never bright turf-green. Token names are semantic so
 * they never shadow Tailwind's default scales.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./site.config.ts",
  ],
  theme: {
    extend: {
      colors: {
        // Deep, muted evergreen — the structural anchor. Never bright.
        evergreen: { DEFAULT: "#233A2E", dark: "#18271E", deep: "#101C15", light: "#33523F" },
        // Warm near-black — headings + body text on light surfaces. Not pure black.
        ink: { DEFAULT: "#1C201B", soft: "#2A2E27" },
        // Honed limestone / bluestone — the page base. Cool stone, not warm birch.
        limestone: { DEFAULT: "#E8E6DF", dark: "#DBD8CD", deep: "#F2F1EB" },
        // Cards + raised surfaces.
        bone: "#FBFAF6",
        // Warm stone grey — borders, captions, icons on dark. (Too light for body text.)
        stone: { DEFAULT: "#8A857A", light: "#A8A399", dark: "#6B675E" },
        // Warm cedar — the single accent + primary CTA. Wood/earth, not orange.
        cedar: { DEFAULT: "#A85F2A", dark: "#8A4C20", light: "#C17B40", deep: "#3A2412" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

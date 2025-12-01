import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Identity
        brand: {
          blue: "#0F4C81",   // Doctor: Deep Professional Blue
          teal: "#4FD1C5",   // Patient: Soft Healing Teal
          white: "#F8FAFC",  // Background: Clinical White
          gray: "#E2E8F0",   // Borders: Sterile Gray
        },
        // Status Indicators
        status: {
          success: "#10B981", // Revenue/Good Stock
          warning: "#F59E0B", // Pending Actions
          error: "#EF4444",   // Critical Stock/Emergency
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // High readability for medical data
        mono: ["JetBrains Mono", "monospace"], // For AI Code/Logs
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
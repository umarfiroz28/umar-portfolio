/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Inter",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Inter",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      colors: {
        canvas: "#F5F5F7",
        ink: "#1D1D1F",
        secondary: "#6E6E73",
        muted: "#86868B",
        line: "#D2D2D7",
        divider: "#E8E8ED",
        blue: "#0071E3",
        blueHover: "#0077ED",
        blueSoft: "#EAF3FF",
      },
      boxShadow: {
        premium: "0 28px 80px rgba(29, 29, 31, 0.10)",
        lift: "0 22px 60px rgba(29, 29, 31, 0.14)",
      },
    },
  },
  plugins: [],
};

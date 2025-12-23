/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        accent: "#38BDF8",
        muted: "#64748B",
        surface: "#E5E7EB",
      },
    },
  },
  plugins: [],
};

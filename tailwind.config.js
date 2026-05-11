/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        navy: "#0f172a",
        gold: "#b8860b"
      },
      fontFamily: {
        sans: ["Pretendard", "Noto Sans KR", "system-ui", "sans-serif"],
        serif: ["Noto Serif KR", "serif"]
      }
    }
  },
  plugins: []
};

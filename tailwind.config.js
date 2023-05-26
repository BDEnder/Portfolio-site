/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        text: "#f4f5f6",
      },
      backgroundColor: {
        background: "#18191b",
        primary: "#37373f",
        secondary: "#211f23",
        accent: "#080708",
      },
    },
  },
  plugins: [],
};

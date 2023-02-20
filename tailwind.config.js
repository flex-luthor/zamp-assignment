/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-black": "#282c3f",
        "theme-black-50": "#535766",
        "theme-black-20": "#7e818c",
        "theme-gray": "#878b94",
        "theme-orange": "#ff905a",
        "theme-cherry": "#ff3f6c",
      },
    },
    fontFamily: {
      sans: "Assistant,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
    },
    fontSize: {
      xs: "0.8rem",
    },
  },
  plugins: [],
};

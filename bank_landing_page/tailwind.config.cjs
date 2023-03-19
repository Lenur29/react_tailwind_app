/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1400px",
    },
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    fontSize: {
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      30: '30px',
      40: '40px',
      48: '48px',
      52: '52px',
      68: '68px',
      72: '72px',
    },
    lineHeight: {
      13: '1.3',
      14: '1.4',
      15: '1.5',
      16: '1.6',
      17: '1.7',
      18: '1.8',
    },
  },
  plugins: [],
};

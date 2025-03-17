module.exports = {
  content: [
    "./*.{html,js,jsx,ts,tsx}", // Chỉ quét thư mục `src`
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        primary: "#3858F6",
        secondary: "#F6F8FC",
        dark: "#1D2630",
        "theme-light": "#F6F8FC",
        border: "#E1E9F8",
        gradient: "linear-gradient(90deg, #ED3251 0%, #F6635D 100%)",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};

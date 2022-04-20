module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/views/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "60%": "#F3F4ED",
        "30%": "#536162",
        "10-a": "#424642",
        "10-b": "#C06014",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

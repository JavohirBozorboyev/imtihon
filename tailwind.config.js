module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sx: "375px",
      // => @media (min-width: 375px) { ... }

      sl: "425px",
      // => @media (min-width: 425px) { ... }

      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }
    },
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        x4: "0px 0px 4px gray",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        x5: "0px 0px 30px gray",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 60px 120px -20px #EBEFFD",
      },
    },
  },
  plugins: [],
};

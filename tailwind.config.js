/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightRed: "#D97047",
        regRed: "#C45429",
        darkRed: "#6d3017",
        lightBlue: "#68ACE3",
        regBlue: "#216DAB",
        darkBlue: "#103756",
        regGreen: "#4AAD52"
      },
      // fontFamily: {
      //   ovo: ['Ovo', 'serif'],
      //   roboto: ['Roboto', 'sans-serif'],
      // },
      zIndex: {
        '100': '100'
      },
    },
  },
  plugins: [],
}

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
        lightRed: "#D97047", // old palette
        regRed: "#F98764", // new palette
        darkRed: "#F85F30", // new, 10% darker than regRed
        lightBlue: "#88BDE9", // new palette
        regBlue: "#567FA3", // new palette
        darkBlue: "#375681", // new palette
        regGreen: "#4AAD52", // old palette
        regYellow: "#F2F5CD" // new palette
      },
    },
  },
  plugins: [],
}

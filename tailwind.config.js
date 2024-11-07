/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  presets: ["babel-preset-react-app"],
  plugins: ["@babel/plugin-proposal-private-property-in-object"],
}


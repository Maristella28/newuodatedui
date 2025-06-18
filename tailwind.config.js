/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js", // ✅ Add this line for Flowbite
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a",
        secondary: "#facc15",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // ✅ Add Flowbite plugin
  ],
}

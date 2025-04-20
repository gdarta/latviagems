/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/*.html",
    "./docs/**/*.js" // just in case you use Tailwind classes in JS too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

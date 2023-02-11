/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../content/*.md", "../layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "serif" : ["Poppins"],
        "display" : ["Poppins"],
        "body" : ["Poppins"],
      },
    },
    listStyleType: {
      square: 'square',
      roman: 'upper-roman',
    }
  },
  plugins: [],
}

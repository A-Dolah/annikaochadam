module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display Light', 'serif'],
        sans: ['Louis George Cafe', 'sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

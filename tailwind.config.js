/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      screens:{
        'mobile': '450px',
        'tablet': '700px'
      },
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'submit-blue':'#376cfa',
        'listItemDark-bg':'#1B1B1CFF',
        'listItemHover-bg':"#7E7D7DFF",
        'listItemDarkHover':"#abafaf",
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'bg-hover':'#7E7D7DFF',
        'edit-test-bg': '#d7d7c1',
        'delete':'#ff000a',

      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
            "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
    },
  },
  plugins: [],
};
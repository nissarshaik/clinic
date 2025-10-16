/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9e6eb',
          100: '#f3cdd8',
          200: '#e69bb1',
          300: '#d9698a',
          400: '#cc3762',
          500: '#c0053b',
          600: '#8a1538', // Qatar red
          700: '#731031',
          800: '#5c0c27',
          900: '#45091e',
          950: '#2e061a',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0d0d0d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
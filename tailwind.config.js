/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'max-ar-12-10': { raw: '(max-aspect-ratio: 12/10)' }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '4rem', // 64px
        '7xl': '4.5rem', // 72px
        '8xl': '6rem', // 96px
        '9xl': '8rem' // 128px
      },
      colors: {
        primary: '#FF923E',
        'heading-color': '#091434'
      }
    }
  },
  plugins: []
}

import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'footer-p': '#858585'
      },
      fontSize: {
        11: '0.6875rem',
        13: '0.8125rem',
        15: '0.9375rem'
      },
      fontFamily: {
        Poppins: [`"Poppins", sans-serif`],
        'Poppins-Medium': ['Poppins-Medium', 'sans-serif'],
        'Poppins-SemiBold': ['Poppins-SemiBold', 'sans-serif'],
        'Poppins-Bold': ['Poppins-Bold', 'sans-serif']
      },
      maxWidth: {
        1160: '1160px',
        1200: '1200px'
      },
      screens: {
        xs: { max: '639px' },
        990: '990px',
        1240: '1240px',
        1290: '1290px',
        1360: '1360px'
      },
      transitionProperty: {
        transform: 'transform'
      }
    }
  },
  plugins: []
}
export default config

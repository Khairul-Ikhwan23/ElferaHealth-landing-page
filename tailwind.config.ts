import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'elfera-pink': '#FF6B9D',
        'elfera-pink-dark': '#E6399F',
        'elfera-pink-light': '#FFB6C1',
        'elfera-white': '#FFFFFF',
        'elfera-light-gray': '#F5F5F5',
        'elfera-teal': '#4ECDC4',
        'elfera-teal-dark': '#3BA99F',
      },
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        'roboto': ['var(--font-roboto)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config


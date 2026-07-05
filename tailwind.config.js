const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F9F7F3',
        primary: '#699C3A',
        primary_dark: '#4C7A28',
        primary_light: '#EEF5E5',
        primary_green: '#2D5016',
        primary_blue: '#146FF8',
        primary_blue_dark: '#0E59D1',
        secondary: '#C1F497',
        accent: '#F2A93B',
        accent_terra: '#D45B34',
        success: '#4CAF50',
        dark_grey: '#656366',
        light_grey: '#C7CCCE',
        border_soft: '#E7EAE1',
        error: '#FF0422',
        error_toast_bg: 'rgba(255, 4.25, 33.90, 0.05)',
        blackA6: 'rgba(0, 0, 0, 0.4)',
      },
      boxShadow: {
        card: '0 2px 10px rgba(31, 41, 20, 0.06)',
        'card-hover': '0 16px 32px rgba(31, 41, 20, 0.12)',
        soft: '0 1px 3px rgba(31, 41, 20, 0.08)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        garden: "url('../public/images/Rectangle355.png')",
        FruitDrying: "url('../public/images/Phat_thu_2_73ad2bd8c6.webp')",
        404: "url('../public/images/404.png')",
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      animation: {
        'slide-up-down': 'slideUpDown 0.3s ease-in-out',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};

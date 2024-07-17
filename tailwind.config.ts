import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'left-up-down': {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'right-up-down': {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'center-up-down': {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'lime-spin': {
          '0%': {
            transform: 'rotate(0deg)',
            transformOrigin: 'center',
          },
          '100%': {
            transform: 'rotate(360deg)',
            transformOrigin: 'center',
          },
        },
        'orange-spin': {
          '0%': {
            transform: 'rotate(0deg)',
            transformOrigin: 'center',
          },
          '100%': {
            transform: 'rotate(360deg)',
            transformOrigin: 'center',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.2s ease-in-out',
        'left-up-down': 'left-up-down 3s ease-in-out infinite',
        'right-up-down': 'right-up-down 3.4s ease-in-out infinite',
        'lime-spin': 'lime-spin 10s linear infinite',
        'orange-spin': 'orange-spin 30s linear infinite',
        'center-up-down': 'center-up-down 3.6s ease-in-out infinite',
      },
      transformOrigin: {
        center: '50% 50%',
      },
    },
  },
  plugins: [],
};
export default config;

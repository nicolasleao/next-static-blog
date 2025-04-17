import type { Config } from 'tailwindcss';
import tailwindTypography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [tailwindTypography],
  theme: {
    extend: {
      colors: {
        // Solarized/pastel color palette
        pastel: {
          bg: '#171A19',
          text: '#f1efe4',
          primary: '#88A773',
          secondary: '#9CA668',
          accent: '#C6D99F',
          muted: '#5A6858',
          dark: '#131613',
          light: '#e0e7d3',
        },
        // Keep old green colors for compatibility
        green: {
          400: '#88A773', // primary green
          500: '#9CA668', // secondary green
          600: '#7A9364',
          700: '#5A6858', // darker green
          800: '#3F4A3D',
          900: '#171A19', // darkest background
        },
        neutral: {
          100: '#f1efe4', // lightest text
          200: '#e0e7d3', // light text
          300: '#c8c8b5', // muted text
          700: '#3F4A3D', // darkish
          800: '#252825', // very dark
          900: '#171A19', // darkest background
        }
      },
      backgroundColor: {
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
};

export default config; 
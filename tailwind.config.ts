import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        md: '2rem',
        lg: '3.75rem',
        xl: '2.5rem',
        '2xl': '10.5rem',
      },
    },
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'transparent': 'transparent',
        'white': '#ffffff',
        'black': '#000000',
        'app-500': '#ff8027',
        'app-600': '#ea580c',
        'gray-border': '#cccccc',
        'sub-text': '#38383866',
        'error': '#ff0000eb',
        'warning': '#ccff33',
        'success': '#33ff66f2',
        'primary': '#3366ff',
        'menu-active': '#f9e68a',
        'yellow-300': '#fff000',
        'dark-1': '#0e1c36',
        'dark-2': '#172a3a',
        'dark-3': '#31435a'
      },
      gap: {
        "space-1": "calc(3.2px + 0.25vw)", 
        "space-2": "calc(6.4px + 0.5vw)",
        "space-3": "calc(14.4px + 0.5vw)",
        "space-4": "calc(12.8px + 1vw)",
        "space-5": "calc(25.6px + 2vw)",
        "space-6": "calc(28.8px + 2.25vw)",
        "space-7": "calc(57.6px + 4.5vw)",
        "space-8": "calc(-28.8px + 14vw)",
        "space-9": "calc(-52.8px + 21.5vw)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0066FF',
          'blue-light': '#E6F2FF',
          'blue-dark': '#0052CC',
          green: '#00A86B',
          'green-light': '#E6F7F1',
          orange: '#F97316',
          'orange-light': '#FFF7ED',
          gray: '#1F2937',
          'gray-light': '#6B7280',
          bg: '#F5F7FA',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

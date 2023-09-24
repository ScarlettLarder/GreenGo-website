import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        pinkaccent: '#F2B5D4',
        blueaccent: '#279AF1',
        backgreen: '#C2F8CB',
        lightblue: '#92D0FF',
        greengo: '#49A452',
        lightgreen: '#F0FFF1',
        bordergreen: '#80C086',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config

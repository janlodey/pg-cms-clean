import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // ONLY frontend routes - keep Payload admin isolated
    './src/app/(frontend)/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: '#002850',
        sky: '#058CFA',
        'sky-hover': '#0070d6',
        mountain: '#00B000',
      },
    },
  },
  plugins: [],
}

export default config

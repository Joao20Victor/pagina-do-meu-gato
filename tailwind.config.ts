import type { Config } from 'tailwindcss'

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
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'Bruno': 'url(/Bruno/background.jpg)',  
        'imagem1': 'url(/Bruno/foto1.jpg)',  
        'imagem2': 'url(/Bruno/foto2.jpg)',  
        'imagem3': 'url(/Bruno/foto3.jpg)',  
      },
      colors: {
        'P-blue': '#1E232E',
        'P-purple': '#7A577A',
      },
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'electro-blue': '#00A8E8',
        'navy-blue': '#001D3D',
        'navy-blue-light': '#003566'
      }
    },
  },
  plugins: [],
}

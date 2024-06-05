/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Plus Jakarta Sans']
      },
      colors: {
        primary: '#FF9531', 
        secondary: '#14142B', 
        accent: '#FFFFFF',
      },
      borderRadius: {
        primary : '60px',
      }
    },
  },
  plugins: [],
}



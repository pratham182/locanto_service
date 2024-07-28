/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {boxShadow: {
      'custom': '0 0 15px rgba(0, 0, 0, 0.07)',
    },
    colors: {
      'custom-red': '#f7425b',
      'background-white':'#F3F3F3',
      'custom-black':'#191A1F',
      'custom-grey':'#777777',
      'custom-orange':'#EA5D49',
      'text-black':'#333333'
    
    }
  },
  },
  plugins: [],
}


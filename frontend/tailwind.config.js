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
    }
  },
  },
  plugins: [],
}


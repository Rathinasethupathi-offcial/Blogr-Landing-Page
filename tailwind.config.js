/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        'xl-custom': '30px',
        'custom-2': '150px',
        'custom':'250px',
        
        'bl-large': '40px 0 0 0'  // Custom bottom-left radius
      }
    },
  },
  plugins: [],
}

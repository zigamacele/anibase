/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'carousel-1': "url('https://i.imgur.com/4ilowmp.jpeg')",
        'carousel-2': "url('https://i.imgur.com/XVYW0gC.jpeg')",
        'carousel-3': "url('https://i.imgur.com/aWB3b4I.jpeg')",
        'carousel-4': "url('https://i.imgur.com/1hnXvhH.jpg')",
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};

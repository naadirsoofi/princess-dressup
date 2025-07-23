/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        princess: {
          pink: '#FFB6C1',
          purple: '#DDA0DD',
          blue: '#B0E0E6',
          gold: '#FFD700',
          rose: '#FF69B4'
        }
      },
      fontFamily: {
        'fairy': ['Comic Sans MS', 'cursive', 'sans-serif']
      },
      animation: {
        'sparkle': 'sparkle 2s infinite',
        'bounce-gentle': 'bounce 2s infinite',
        'shimmer': 'shimmer 3s infinite',
        'snowfall': 'snowfall linear infinite',
        'snowfall-sparkle': 'snowfall linear infinite, sparkle 2s ease-in-out infinite'
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.1)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: '200px 0' }
        },
        snowfall: {
          '0%': { 
            transform: 'translateY(-100vh) translateX(0px) rotate(0deg)' 
          },
          '100%': { 
            transform: 'translateY(100vh) translateX(100px) rotate(360deg)' 
          }
        }
      }
    },
  },
  plugins: [],
}

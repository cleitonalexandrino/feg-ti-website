/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#060A11',
          900: '#080D16',
          800: '#0F1626',
        },
        navy: {
          slate: '#0D1422',
          surface: '#111927',
          card: '#131E33',
        },
        accent: {
          orange: '#F97316',
          orangeDark: '#EA580C',
          orangeGlow: 'rgba(249, 115, 22, 0.35)',
          blue: '#2563EB',
          blueLight: '#3B82F6',
          blueGlow: 'rgba(37, 99, 235, 0.3)',
          emerald: '#10B981',
          emeraldDark: '#059669',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'obsidian-radial': 'radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.14) 0%, rgba(6, 10, 17, 0.98) 70%)',
        'orange-gradient': 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
        'blue-gradient': 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
        'headline-orange': 'linear-gradient(90deg, #FFFFFF 30%, #FB923C 70%, #F97316 100%)',
        'headline-blue': 'linear-gradient(90deg, #FFFFFF 30%, #60A5FA 70%, #3B82F6 100%)',
      }
    },
  },
  plugins: [],
}

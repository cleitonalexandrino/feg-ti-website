/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Midnight Cobalt brand palette (F&G TI Key Visual)
        brand: {
          bg: '#020817',        // Deep space midnight
          deep: '#040E26',      // Section background
          surface: '#071738',   // Container surface
          card: '#091B42',      // Elevated glass card
          cardHover: '#0D255C', // Hover card
          navy: '#0A225A',      // Pure brand cobalt
        },
        // Backwards-compatible mappings for existing components
        obsidian: {
          950: '#020817',
          900: '#040E26',
          800: '#071738',
        },
        navy: {
          slate: '#071738',
          surface: '#091B42',
          card: '#0C2356',
        },
        accent: {
          orange: '#FF6A00',
          orangeDark: '#E55A00',
          orangeLight: '#FF8800',
          orangeGlow: 'rgba(255, 106, 0, 0.45)',
          blue: '#0066FF',
          blueLight: '#38BDF8',
          blueDark: '#1446B7',
          blueGlow: 'rgba(0, 102, 255, 0.35)',
          emerald: '#10B981',
          emeraldDark: '#059669',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'obsidian-radial': 'radial-gradient(ellipse at 50% -10%, rgba(0, 102, 255, 0.22) 0%, rgba(2, 8, 23, 0.98) 75%)',
        'brand-radial': 'radial-gradient(ellipse at 50% -10%, rgba(0, 102, 255, 0.22) 0%, rgba(2, 8, 23, 0.98) 75%)',
        'orange-gradient': 'linear-gradient(135deg, #FF6A00 0%, #FF8800 100%)',
        'blue-gradient': 'linear-gradient(135deg, #0066FF 0%, #1446B7 100%)',
        'headline-orange': 'linear-gradient(90deg, #FFFFFF 20%, #FFAA44 70%, #FF6A00 100%)',
        'headline-blue': 'linear-gradient(90deg, #FFFFFF 20%, #60A5FA 70%, #0066FF 100%)',
        'ribbon-glow': 'radial-gradient(circle at 10% 20%, rgba(255, 106, 0, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(0, 102, 255, 0.18) 0%, transparent 50%)',
      }
    },
  },
  plugins: [],
}

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#131424",
        terciary: "#A8EB12",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      },
      animation: {
        moveSideToSide: 'moveSideToSide 3s ease-in-out infinite',
        rotateAndFloat: 'rotateAndFloat 300s linear infinite',
        spaceShipMovement: 'spaceShipMovement 5s ease-in-out infinite',
        rotateSlowly: 'rotateSlowly 20s linear infinite',
      },
      keyframes: {
        moveSideToSide: {
          '0%': { transform: 'translateX(0) rotate(0deg)' },  // No rotación al inicio
          '50%': { transform: 'translateX(20px) rotate(5deg)' },  // Mueve y rota ligeramente
          '100%': { transform: 'translateX(0) rotate(0deg)' },  // Vuelve a su posición y sin rotación
        }, 
        rotateAndFloat: {
          '0%': {
            transform: 'rotate(0deg) translateY(0)',  // Empieza sin rotación ni movimiento vertical
          },
          '50%': {
            transform: 'rotate(180deg) translateY(-10px)',  // Gira 180 grados y mueve ligeramente hacia arriba
          },
          '100%': {
            transform: 'rotate(360deg) translateY(0)',  // Vuelve a la posición original con rotación completa
          },
        },
        spaceShipMovement: {
          '0%': {
            transform: 'translateX(0) translateY(0) rotate(0deg)',
          },
          '25%': {
            transform: 'translateX(15px) translateY(-10px) rotate(5deg)',
          },
          '50%': {
            transform: 'translateX(0) translateY(10px) rotate(-5deg)',
          },
          '75%': {
            transform: 'translateX(-15px) translateY(-5px) rotate(5deg)',
          },
          '100%': {
            transform: 'translateX(0) translateY(0) rotate(0deg)',
          },
        },
        rotateSlowly: {
          '0%': {
            transform: 'rotate(0deg)', // Comienza en 0 grados
          },
          '100%': {
            transform: 'rotate(360deg)', // Gira 360 grados
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

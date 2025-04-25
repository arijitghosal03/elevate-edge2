/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF2E2E",
          50: "#FFEBEB",
          100: "#FFD6D6",
          200: "#FFADAD",
          300: "#FF8585",
          400: "#FF5C5C",
          500: "#FF2E2E",
          600: "#E60000",
          700: "#B30000",
          800: "#800000",
          900: "#4D0000",
          950: "#330000",
        },
        neutral: {
          50: "#F9F9F9",
          100: "#F3F3F3",
          200: "#E6E6E6",
          300: "#D9D9D9",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#222222",
          950: "#141414",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["GT Walsheim", "system-ui", "sans-serif"],
        "dancing-script": ["Dancing Script", "cursive"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo-in-out": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.03)",
        elevation: "0 10px 30px rgba(0, 0, 0, 0.08)",
        red: "0 10px 30px rgba(255, 46, 46, 0.15)",
      },
    },
  },
  plugins: [],
};

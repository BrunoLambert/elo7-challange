import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "elo7-green": "#008B90",
        "elo7-yellow": "#D99F2C",
        "elo7-dark-yellow": "#FDB933",
        "elo7-light-yellow": "#FFF3DB",
        "elo7-grey": "#F4F5F7",
      }
    },
  },
  plugins: [],
};
export default config;

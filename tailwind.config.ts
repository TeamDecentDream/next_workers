import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#00B050",
        lightGreen: "rgba(160,229,87,0.64)",
        nextBlue: "#3396F4",
        nextPurple: "#7C33F4",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#12D0C5",
        secondary: "#18D67B",
        tertiary: "#2E46C1",
      },
      boxShadow: {
        "hero-img": "2px 2px 10px #18D67B, -4px -4px 10px #2E46C1",
      },
    },
  },
  plugins: [],
};
export default config;

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
    },
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
    },
    colors: {
      todoNav: "#171616",
      bodyBox: "#1C1C1C",
      white: "#FEFEFE",
      black: "#000000",
      btcolor: "#343434",
      shopBody: "#FEFDF9",
      shop2Body: "#FFF5F3",
      textgray: "#4F4E4C",
    },
  },
  plugins: [],
};
export default config;
// /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpaint1.f668c41f.webp&w=1920&q=75
// /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpaint2.ccb9f935.webp&w=1920&q=75

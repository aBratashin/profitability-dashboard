import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'background-white': '#f5f5f5',
        'blue': '#2555FF',
        'gray': '#3E3E3E',
        'oxemGreen': '#01BF64',
        'oxemRed': '#FF5757',
        'oxemWhite': '#EAEAEA',
        'oxemYellow': '#F8AE00',
      },
    },
  },
  plugins: [],
};
export default config;

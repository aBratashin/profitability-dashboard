import type {Config} from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
        './src/features/**/*.{js,ts,jsx,tsx,mdx}',
        './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
        './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'white': '#ffffff',
                'background-white': '#f5f5f5',
                'blue': '#2555FF',
                'lightblue': '#64B1F9',
                'gray': '#3E3E3E',
                'green': '#01BF64',
                'red': '#FF5757',
                'lightwhite': '#EAEAEA',
                'yellow': '#F8AE00',
                'purple': '#7B5BF0',
                'lightgreen': '#17B2A9',
                'pink': '#E282EA',
                'lightgray': '#E4E4E4',
            },
            backgroundImage: {
                'back': 'url("/img/back.svg")',
            },
        },
    },
    plugins: [],
};
export default config;

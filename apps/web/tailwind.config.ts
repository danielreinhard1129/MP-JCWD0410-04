import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blue1: '#0093ED',
        blue2: '#edf8ff',
        blue3: '#21abff',
        blue4: '#0073ba',
        black1: '#232729',
        grey1: '#eff0f1',
        grey2: '#dde0e2',
      },
    },
  },
};

export default config;

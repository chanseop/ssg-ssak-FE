import type { Config } from 'tailwindcss'

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'event_end_date':"url('/images/event/event_end_date.png')",
        'linear_106':"linear-gradient(106.4deg,#eb0000 6.03%,#eb6612 21.34%,#c68200 37.11%,#fc348c 52.88%,#7720a7 67.72%,#0ca19a 82.1%)",
        'linear_110': "linear-gradient(110deg,#f40000 -5.78%,#ff8a00 17.06%,#f8b404 33.44%,#f9ad05 48.81%,#ff8a00 64.68%,#b258cb 85.01%,#00c4b4 103.04%)",
        'linear_93': 'linear-gradient(93.4deg,#f40000,#ff8a00 14.06%,#f9ad05 37.76%,#fc348c 62.77%,#b258cb 78.91%,#00c4b4 94.39%)',
      },
      // colors: {
      //   'linear_93': 'linear-gradient(93.4deg,#f40000,#ff8a00 14.06%,#f9ad05 37.76%,#fc348c 62.77%,#b258cb 78.91%,#00c4b4 94.39%)',
      // },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    nextui()
  ],
}

export default config

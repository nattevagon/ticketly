module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
    unoptimized: true,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          "white": "#F8F8F8",
          "black": "#161616",
          "blue": "#185494",
          "red": "#d10808",
        },
        secondary: {
          "white": "#F3F3F3",
          "black": "#272625",
          "blue": "#134376",
        },
        third: {
          "white": "#C6C6C6",
          "black": "#363534",
        },
        fourth: {
          "white": "#E7E7E7",
          "black": "#000000",
        }
      },
    },
    container: {
      center: true, // Center the container by default
      padding: {
        DEFAULT: '16px', // Default padding untuk semua breakpoint
        md: '16px', // Padding khusus untuk breakpoint md (768px)
      },
      screens: {
        'xs': '440px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp')
  ],
  darkMode: "class"
};
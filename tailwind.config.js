/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-dark": "url('/img/background_dark.jpg')",
        cenario: "url('/img/cenario.jpg')",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
      colors: {
        "border-light": "#383838",
        "border-medium": "#262626",
        "border-dark": "#131717",
        "clr-bege": "#B69E73",
        "clr-bege-light": "#C1B197",
        "clr-bege-medium": "#988566",
        "clr-bege-dark": "#6A563E",
        "clr-purple": "#8E00CC",
        "clr-purple-dark": "#67158A",
        "clr-yellow": "#C08A00",
        "clr-black": "#302B28",
        "clr-orange": "#C0711C",
        "clr-orange-light": "#C96410",
        "clr-orange-dark": "#C05C16",
        "clr-brown": "#453426",
        "clr-gray": "#3C3E43",
        "clr-gray-light": "#656161",
        "clr-gray-medium": "#212224",
        "clr-gray-dark": "#272729",
      },
      boxShadow: {
        yellow: "0px 0px 50px #C08A00",
        "2xl": "4px 4px 0px ",
        "3xl": "6px 10px 0px 0px rgba(0, 0, 0, 0.9)",
        "2xl-inner": "inset 6px 6px 0px 0px rgba(0, 0, 0, 0.9)",
      },
      width: {
        lg: "1140px",
      },
    },
  },
  plugins: [],
};

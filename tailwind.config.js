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
        1: "1px",
        3: "3px",
        6: "6px",
      },
      colors: {
        "bg-black": "#040710",
        "border-light": "#383838",
        "border-medium": "#262626",
        "border-dark": "#131717",
        "clr-bege": "#B69E73",
        "clr-bege-light": "#C1B197",
        "clr-bege-medium": "#988566",
        "clr-bege-dark": "#6A563E",
        "clr-purple": "#8E00CC",
        "clr-purple-dark": "#67158A",
        "clr-yellow": "#C19121",
        "clr-black": "#302B28",
        "clr-orange": "#B95709",
        "clr-orange-light": "#C29003",
        "clr-orange-dark": "#822E15",
        "clr-brown": "#453426",
        "clr-gray": "#3C3E43",
        "clr-gray-2": "#303236",
        "clr-gray-3": "#4A4649",
        "clr-gray-light": "#656161",
        "clr-gray-medium": "#212224",
        "clr-gray-dark": "#272729",
        "clr-pink-light": "#CC65CC",
        "clr-pink-dark": "#2F3E6A",
        "clr-green": "#45625E",
        "clr-green-light": "#548178",
        "clr-green-dark": "#8B7F6D",
        "clr-font": "#4C4841",
        "clr-font-light": "#ADBAB8",
      },
      boxShadow: {
        yellow: "0px 0px 50px #B95709",
        "2xl": "4px 4px 0px ",
        "3xl": "6px 10px 0px 0px rgba(0, 0, 0, 0.9)",
        "2xl-inner": "inset 6px 6px 0px 0px rgba(0, 0, 0, 0.9)",
        "2xl-inner-gray": "inset 4px 7px 0px 0px #35302D",
      },
      width: {
        lg: "1140px",
      },
      height: {
        md: "760px",
      },
      borderRadius: {
        "4xl": "2rem",
        "6xl": "3rem",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};

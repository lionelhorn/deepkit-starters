/** @type {import("tailwindcss").Config} */
export default  {
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
  ],
  darkMode: "media",
  prefix: "",
  theme: {
    extend: {
      colors: {
        "primary": "#ffffff",
        "default": "#f3f3f3",
        "background": "#484848",
        "foreground": "#f3f3f3",
        "destructive": "#ea9999"
      }
    }
  }
};

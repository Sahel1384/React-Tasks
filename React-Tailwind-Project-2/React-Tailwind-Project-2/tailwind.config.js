/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('./assets/images/background-image.jpg')",
        "custom-bg1": "url('./assets/images/blog-1.jpg')",
        "custom-bg2": "url('./assets/images/blog-2.jpg')",
        "custom-bg3": "url('./assets/images/blog-3.jpg')",
      },
    },
  },
  plugins: [],
};

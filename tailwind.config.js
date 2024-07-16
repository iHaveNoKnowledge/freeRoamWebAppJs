/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "fade-bottom":
          "linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(200,200,220,0.99) 70%), url('https://wallpapers.com/images/hd/windows-xp-wallpaper-dump-ovzbab2skq4ft6jl.jpg') ",
      },
    },
  },
  plugins: [],
};

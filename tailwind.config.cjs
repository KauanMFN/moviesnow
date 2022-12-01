/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                "2xl": "1600px",
            },
            colors: {
                orange: "#ffc520",
                "dark-orange": "#d4a41a",
                "light-gray": "#1b1b1b",
                gray: "#121212",
            },
        },
    },
    plugins: [],
};

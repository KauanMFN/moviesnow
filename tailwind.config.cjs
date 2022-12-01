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
                "very-light-gray": "#c2c5c9",
                "light-gray": "#1b1b1b",
                gray: "#121212",
            },
        },
    },
    plugins: [],
};

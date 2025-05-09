/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                light: {
                    primary: '#f8f4ec',
                    secondary: '#d9a066',
                    third: '#8c6239',
                    fourth: '#2d1c0f',
                    true: '#5b8c5a',
                    alert: '#c0392b',
                },
                dark: {

                }
            }
        },
    },
    plugins: [],
}
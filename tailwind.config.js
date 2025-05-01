/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                light: {
                    tile1: '#769FCD',
                    tile2: '#B9D7EA',
                    tile3: '#D6E6F2',
                    tile4: '#F7FBFC',
                },
                dark: {

                }
            }
        },
    },
    plugins: [],
}
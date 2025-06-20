/** @type {import('tailwindcss').Config} */
module.exports = {
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
                    accent: '#ffe066',
                    info: '#3498db',
                    neutral: '#f0ead6',
                    orange: '#F77334ff',
                    yellow: '#FCDF42ff',
                },
                dark: {

                }
            },
            fontFamily: {
                ibm: ['IBMPlexMono-Regular'],
            },
        },
    },
    plugins: [],
}
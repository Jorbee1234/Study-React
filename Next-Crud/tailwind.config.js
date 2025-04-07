/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    safelist: [
        {
            pattern: /^bg-/,
            variants: ['hover', 'focus']
        },
        {
            pattern: /^to-/,
            variants: ['hover', 'focus']
        },
        {
            pattern: /^from-/,
            variants: ['hover', 'focus']
        }
    ],
    darkMode: false,
    theme: {
        extend:{},
    },
    variants:{
        extend:{},
    },
    plugins: [],
}
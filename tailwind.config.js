/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Cores baseadas nos tons de zinc e lime do projeto principal
                plannerDark: '#18181b', // zinc-900
                plannerLight: '#fafafa', // zinc-50
                plannerAccent: '#84cc16', // lime-500
                plannerAccentDark: '#65a30d', // lime-600
                plannerAccentLight: '#d9f99d', // lime-200
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.zinc.700'),
                        a: {
                            color: theme('colors.plannerAccent'),
                            '&:hover': {
                                color: theme('colors.plannerAccentDark'),
                            },
                        },
                        h1: { color: theme('colors.zinc.900') },
                        h2: { color: theme('colors.zinc.900') },
                        h3: { color: theme('colors.zinc.900') },
                        h4: { color: theme('colors.zinc.900') },
                        code: { color: theme('colors.plannerAccentDark') },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.zinc.300'),
                        a: {
                            color: theme('colors.plannerAccent'),
                            '&:hover': {
                                color: theme('colors.plannerAccentLight'),
                            },
                        },
                        h1: { color: theme('colors.zinc.100') },
                        h2: { color: theme('colors.zinc.100') },
                        h3: { color: theme('colors.zinc.100') },
                        h4: { color: theme('colors.zinc.100') },
                        code: { color: theme('colors.plannerAccentLight') },
                    },
                },
            }),
        },
    },
    plugins: [],
}
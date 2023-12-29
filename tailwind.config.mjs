/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        heading: '2rem',
        body: '1rem',
        label: '0.875rem',
        small: '0.625rem',
        price: '0.75rem'
      }
    }
  },
  plugins: []
}

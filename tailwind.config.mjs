/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			padding: {
			  DEFAULT: '0rem',
			  sm: '2rem',
			  lg: '4rem',
			  xl: '5rem',
			  '2xl': '6rem',
			},
		  },
		extend: {
			fontFamily: {
				'Crimson': ['Crimson', 'serif'],
				'Raleway': ['Raleway', 'sans-serif']
			}
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				vuejs: {
					100:"#3f6212",
					110: "#122334"
				}
			},
		},
	},
	plugins: [],
}

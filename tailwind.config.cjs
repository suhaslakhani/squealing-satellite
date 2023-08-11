/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				screens: {
					sm: '480px',
					md: '768px',
					lg: '976px',
					xl: '1440px',
				},
				spacing: {
					'1': '8px',
					'2': '12px',
					'3': '16px',
					'4': '24px',
					'5': '32px',
					'6': '48px',
				},
				vuejs: {
					100:"#3f6212",
					110: "#122334"
				}
			},
		},
	},
	plugins: [],
}

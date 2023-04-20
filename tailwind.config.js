/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				brand: '#E56586',
				'brand-gray': '#2F4858'
			},
			screens: {
				['2xl']: '1600px'
			},
			animation: {
				'spin-slow': 'spin 2s linear infinite'
			}
		}
	},

	plugins: [require('tailwind-scrollbar')]
};

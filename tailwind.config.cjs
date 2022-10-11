/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				merriweather: ["Merriweather", "sans-serif"],
			},
			colors: {
				brand: {
					body: "#F7F7FA",
					title: "#10153E",
					light_title: "#60679F",
					card: "#FFFFFF",
					card_border: "#E3E5F1",
				},
			},
			boxShadow: {
				card: "0px 34px 64px rgba(96, 103, 159, 0.2)",
			},
		},
	},
	plugins: [],
}

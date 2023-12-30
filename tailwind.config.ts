import type { Config } from "tailwindcss";
import { colors } from "./config/tailwind/colors";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./content/**/*.{md,mdx}",
	],
	theme: {
		extend: {
			colors: {
				white: "#ffffff",
				black: "#000000",
				transparent: "transparent",
				current: "currentColor",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			fontFamily: {
				heading: ["var(--font-space)", "sans-serif"],
				code: ["var(--font-code)", "monospace"],
			},
			listStyleType: {
				roman: "upper-roman",
			},
		},
	},
	plugins: [
		colors,
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
};
export default config;

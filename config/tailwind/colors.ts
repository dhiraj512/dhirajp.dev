import { colord } from "colord";
import plugin from "tailwindcss/plugin";

// Inspired by https://youtu.be/QJlTWj30krw
// youtube/@simonswiss

function getHSL(color: string) {
	const { h, s, l } = colord(color).toHsl();
	return `${h} ${s}% ${l}%`;
}

function getColorVariables(
	input: string,
	path: string[] = [],
	output: Record<string, string> = {}
): Record<string, string> {
	Object.entries(input).forEach(([key, value]) => {
		const newPath = path.concat(key);
		const newPathString = newPath.join("-");
		const newPathIfDefault = key === "DEFAULT" ? path : newPathString;
		if (typeof value !== "string") {
			getColorVariables(value, newPath, output);
		} else {
			output[`--${newPathIfDefault}`] = getHSL(value);
		}
	});
	return output;
}

// Generate color extension object
function getColorUtilities(
	input: string,
	path: string[] = []
): Record<string, string> {
	return Object.fromEntries(
		Object.entries(input).map(([key, value]) => {
			const newPath = path.concat(key);
			const newPathString = newPath.join("-");
			const newPathIfDefault = key === "DEFAULT" ? path : newPathString;
			if (typeof value !== "string") {
				return [key, getColorUtilities(value, newPath)];
			}
			return [key, `hsl(var(--${newPathIfDefault}) / <alpha-value>)`];
		})
	);
}

const themes = require("./themes.json");

export const colors = plugin(
	function ({ addBase }) {
		addBase({
			":root": getColorVariables(Object.values(themes)[0] as string),
			".dark": getColorVariables(Object.values(themes)[1] as string),
		});
	},
	{
		theme: {
			extend: {
				colors: getColorUtilities(Object.values(themes)[0] as string),
			},
		},
	}
);

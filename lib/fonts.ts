import { Fira_Code, Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const firaCode = Fira_Code({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export { poppins, firaCode };

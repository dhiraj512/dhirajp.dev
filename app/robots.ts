import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
		},
		sitemap: "https://dhirajp.vercel.app/sitemap.xml",
		host: "https://dhirajp.vercel.app/",
	};
}

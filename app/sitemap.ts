import { allExperiments, allSnippets } from "@/.contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	let routes = ["", "projects", "snippets", "lab"].map((route) => ({
		url: `https://dhirajp.vercel.app/${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	let snippets = allSnippets
		.filter((snippet) => snippet.isPublished === true)
		.map((snippet) => ({
			url: `https://dhirajp.vercel.app/${snippet.slug}`,
			lastModified: snippet.publishedDate,
		}));

	let experiments = allExperiments
		.filter((experiment) => experiment.isPublished === true)
		.map((experiment) => ({
			url: `https://dhirajp.vercel.app${experiment.slug}`,
			lastModified: experiment.publishedDate,
		}));

	return [...routes, ...snippets, ...experiments];
}

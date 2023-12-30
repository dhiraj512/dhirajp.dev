import { Snippet, allSnippets } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";

export function getSnippet(slug: string): Snippet {
	const snippet = allSnippets
		.filter((snippet) => snippet.isPublished === true)
		.find((p) => p.id === slug);

	if (
		!snippet ||
		(process.env.NODE_ENV === "production" && snippet.isPublished !== true)
	) {
		notFound();
	}
	if (!snippet) {
		notFound();
	}

	return snippet;
}

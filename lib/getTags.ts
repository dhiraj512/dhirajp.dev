import { Snippet } from "@/.contentlayer/generated";

export type SnippetTags = Snippet["tags"][number];

export function getSnippetTags(snippets: Snippet[]) {
	const tagSet = snippets.reduce((acc, snippet) => {
		snippet.tags.forEach((tag) => acc.add(tag));
		return acc;
	}, new Set<SnippetTags>());

	return Array.from(tagSet);
}

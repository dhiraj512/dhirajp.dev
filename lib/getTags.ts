import { Experiment, Snippet } from "@/.contentlayer/generated";

export function getTags(contents: Snippet[] | Experiment[]) {
	const tagSet = contents.reduce((acc, content) => {
		content.tags.forEach((tag) => acc.add(tag));
		return acc;
	}, new Set<string>());

	return Array.from(tagSet);
}

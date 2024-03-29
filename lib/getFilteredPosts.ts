import { Experiment, Snippet } from "@/.contentlayer/generated";
import Fuse from "fuse.js";

type SnippetFilter = (snippet: Snippet) => boolean;

export function getFilteredSnippets(
	snippets: Snippet[],
	searchQuery: string,
	tag: string
): Snippet[] {
	const filters: SnippetFilter[] = [];

	filters.push((snippet) => snippet.isPublished);

	if (tag) {
		filters.push((snippet) => snippet.tags.includes(tag));
	}

	const filteredSnippets = snippets.filter((snippet) =>
		filters.every((filter) => filter(snippet))
	);

	if (searchQuery === "") {
		return filteredSnippets;
	}

	const fuse = new Fuse(filteredSnippets, {
		keys: ["title", "description", "tags"],
	});
	const searchResults = fuse.search(searchQuery);

	return searchResults.map((result) => result.item);
}

type ExperimentFilter = (experiment: Experiment) => boolean;

export function getFilteredExperiments(
	experiments: Experiment[],
	tag: string
): Experiment[] {
	const filters: ExperimentFilter[] = [];

	filters.push((experiment) => experiment.isPublished);

	if (tag) {
		filters.push((experiment) => experiment.tags.includes(tag));
	}

	const filteredExperiments = experiments.filter((experiment) =>
		filters.every((filter) => filter(experiment))
	);

	return filteredExperiments;
}

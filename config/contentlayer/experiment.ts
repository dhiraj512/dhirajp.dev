import { defineDocumentType } from "contentlayer/source-files";

export const Experiment = defineDocumentType(() => ({
	name: "Experiment",
	filePathPattern: `experiments/**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
		},
		author: {
			type: "string",
		},
		tag: {
			type: "string",
		},
		thumbnail: {
			type: "string",
		},
		publishedDate: {
			type: "date",
			required: true,
		},
		lastUpdatedDate: {
			type: "date",
		},
		isPublished: {
			type: "boolean",
			required: true,
		},
	},
	computedFields: {
		id: {
			type: "string",
			description: "The unique identifier of the post.",
			resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ""),
		},
		slug: {
			type: "string",
			description: "The slug of the post.",
			resolve: (doc) =>
				doc._raw.flattenedPath.replace(/^experiments/, "/lab"),
		},
	},
}));

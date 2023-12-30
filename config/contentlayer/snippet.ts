import { defineDocumentType } from "contentlayer/source-files";

export const Snippet = defineDocumentType(() => ({
	name: "Snippet",
	filePathPattern: `snippets/**/*.mdx`,
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
		tags: {
			type: "list",
			of: {
				type: "string",
			},
			required: true,
		},
		publishedDate: {
			type: "date",
			required: true,
		},
		isPublished: {
			type: "boolean",
			required: true,
		},
		logo: {
			type: "string",
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
			resolve: (doc) => doc._raw.flattenedPath,
		},
	},
}));

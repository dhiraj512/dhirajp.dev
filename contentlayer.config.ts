import { makeSource } from "contentlayer/source-files";
import { Experiment, Snippet } from "./config/contentlayer";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import rehypePrettyCode, {
	Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import fs from "fs";

export default makeSource({
	contentDirPath: "content",
	documentTypes: [Snippet, Experiment],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: JSON.parse(
						fs.readFileSync(
							"./config/contentlayer/moonlight-ii.json",
							"utf8"
						)
					),
					onVisitLine(node) {
						if (node.children.length === 0) {
							node.children = [{ type: "text", value: " " }];
						}
					},
					onVisitHighlightedLine(node) {
						node.properties.className = ["highlighted-line"];
					},
					onVisitHighlightedChars(node) {
						node.properties.className = ["highlighted-chars"];
					},
				} as Partial<RehypePrettyCodeOptions>,
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ["anchor-heading-link"],
						ariaLabel: "Link to section",
					},
				},
			],
		],
	},
});

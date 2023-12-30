import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { compareAsc, compareDesc, format } from "date-fns";
import { Snippet } from "@/.contentlayer/generated";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
	return format(new Date(date), "d LLLL yyyy");
}

export function sortByDate(snippets: Snippet[], sortBy?: "Asc" | "Dsc") {
	const sortByAsc = snippets
		.filter((snippet) => snippet.isPublished === true)
		.sort((a, b) => {
			if (sortBy === "Asc") {
				return compareAsc(
					new Date(a.publishedDate),
					new Date(b.publishedDate)
				);
			}
			return compareDesc(
				new Date(a.publishedDate),
				new Date(b.publishedDate)
			);
		});
	return sortByAsc;
}

// utils/getURL.ts
const IS_SERVER = typeof window === "undefined";
export default function getURL(path: string) {
	const baseURL = IS_SERVER
		? process.env.NEXT_PUBLIC_SITE_URL!
		: window.location.origin;
	return new URL(path, baseURL).toString();
}

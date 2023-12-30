import { Experiment, allExperiments } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";

export function getExperiment(slug: string): Experiment {
	const experiment = allExperiments
		.filter((experiment) => experiment.isPublished === true)
		.find((p) => p.id === slug);

	if (
		!experiment ||
		(process.env.NODE_ENV === "production" &&
			experiment.isPublished !== true)
	) {
		notFound();
	}
	if (!experiment) {
		notFound();
	}

	return experiment;
}

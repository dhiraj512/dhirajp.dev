import { Experiment, allExperiments } from "@/.contentlayer/generated";
import { getExperiment } from "@/lib/getExperiment";
import { Metadata } from "next";
import BackButton from '@/components/mdx/back'
import Icon from '@/components/dashboard/icon'
import Mdx from '@/components/mdx/mdx-components'
import Toc from '@/components/toc'
import ScrollToTop from '@/components/scrollToTop'
import Accordion from '@/components/ui/accordion'
import { format, parseISO } from 'date-fns'

export const generateStaticParams = async () => allExperiments.
    filter((experiment) => experiment.isPublished === true).
    map((experiment) => ({ slug: experiment.slug }));

interface ParamProps {
    params: {
        slug: string
    }
}

export function generateMetadata({ params }: ParamProps): Metadata | undefined {

    const experiment = getExperiment(params.slug)
    if (!experiment) {
        return;
    }
    const { title, slug, description, publishedDate, tag } = experiment;

    return {
        title,
        description,
        publisher: 'dhirajp',
        keywords: tag,
        openGraph: {
            title,
            description,
            url: `https://dhirajp.vercel.app${slug}`,
            type: 'article',
            publishedTime: publishedDate,
            tags: tag,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            creator: '@dhiraj_512',
            site: '@dhiraj_512',
        },
    };
}

export default function LabDetails({ params }: ParamProps) {
    const experiment = getExperiment(params.slug)
    return <ExperimentDetails experiment={experiment} />
}

function ExperimentDetails({ experiment }: { experiment: Experiment }) {
    return (
        <main className='relative mx-4'>
            <article className='container max-w-3xl py-6 lg:py-10 lg:col-span-3'>
                <div className='flex flex-col gap-2 justify-center items-start'>
                    <h1 className='md:text-4xl text-2xl  font-bold'>{experiment.title}</h1>
                    <div className="flex gap-4">
                        <div className='flex gap-1 items-center px-2.5 py-1 rounded-md bg-accent text-xs font-medium text-accent-foreground'>
                            <Icon iconName='calendar' size='sm' />
                            <time>{format(parseISO(experiment.publishedDate), "LLLL d, yyyy")}</time>
                        </div>
                        <span className='px-2.5 py-0.5 inline-flex items-center justify-center rounded-md text-xs font-medium bg-accent text-accent-foreground'>
                            {experiment.tag}
                        </span>
                    </div>
                </div>
                <Accordion content={<Toc />} value='table-of-contents'>
                    Table of Contents
                </Accordion>
                <div className='toc-content'>
                    <Mdx code={experiment.body.code} />
                </div>
                <BackButton className='justify-start' />
                <div className='flex mx-2 justify-end my-4'>
                    <ScrollToTop />
                </div>
            </article>
        </main>
    )
}
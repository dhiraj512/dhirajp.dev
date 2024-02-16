import React from 'react'
import { allExperiments } from '@/.contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import Card from '@/components/ui/card'
import { getTags } from '@/lib/getTags'
import { getFilteredExperiments } from '@/lib/getFilteredPosts'
import Tags from '@/components/tags'

interface Props {
    searchParams: { [key: string]: string }
}

export default function LabPage({ searchParams }: Props) {

    const filteredTag = searchParams.tag ?? ""
    const filteredExperiments = getFilteredExperiments(allExperiments, filteredTag);
    const tags = getTags(allExperiments);
    const experiments = allExperiments.filter((experiment) => experiment.isPublished === true)

    return (
        <div className="my-10 mx-4 flex flex-col gap-6">
            <Tags tags={tags} searchParams={searchParams} />
            {experiments?.length ? (
                <div className="flex flex-col gap-5">
                    {filteredExperiments.map((experiment, index) => (
                        <Link key={index} href={experiment.slug}>
                            <Card className="h-full border border-border cursor-pointer rounded-md px-3 py-2 ring-2 hover:ring-primary ring-transparent ring-offset-background transition-all hover:ring-offset-4">
                                {experiment.publishedDate && (
                                    <time className='text-xs text-muted-foreground'>
                                        {format(parseISO(experiment.publishedDate), "LLLL d, yyyy")}</time>
                                )}
                                <h2 className="text-lg font-semibold">{experiment.title}</h2>
                            </Card>
                        </Link>
                    ))}
                </div>
            ) : (
                <p>No experiments done.</p>
            )}
        </div>
    )
}

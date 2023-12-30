import { allSnippets, Snippet } from '@/.contentlayer/generated'
import Search from '@/components/search'
import Tags from '@/components/tags'
import { getFilteredSnippets } from '@/lib/getFilteredSnippets'
import { getSnippetTags } from '@/lib/getTags'
import { sortByDate } from '@/lib/utils'
import Link from 'next/link'
import Card from '@/components/ui/card'
import Icon from '@/components/dashboard/icon'
import { Metadata } from 'next'

const title = "Snippets"
const description = "collection of code snippets for common use cases"

export const metadata: Metadata = {
    title,
    description,
}

interface Props {
    searchParams: { [key: string]: string }
}

export default function SnippetsPage({ searchParams }: Props) {

    const searchQuery = searchParams.search ?? ""
    const filteredTag = searchParams.tag ?? ""
    const filteredSnippets = getFilteredSnippets(sortByDate(allSnippets), searchQuery, filteredTag);
    const tags = getSnippetTags(allSnippets);

    return (
        <div className='relative my-6 mx-4 flex flex-col gap-6'>
            <div>
                <Search searchParams={searchParams} />
                <Tags tags={tags} searchParams={searchParams} />
            </div>
            <div className="">
                {filteredSnippets?.length ? (
                    <div className="grid gap-5 sm:grid-cols-2">
                        {filteredSnippets.map((snippet, index) => (
                            <SnippetCard key={index} snippet={snippet} />
                        ))}
                    </div>
                ) : (
                    <p>No Snippets Found.</p>
                )}
            </div>
        </div>
    )
}


function SnippetCard({ snippet }: { snippet: Snippet }) {
    return (
        <Link href={snippet.slug} className='group'>
            <Card className='border border-border rounded-sm p-3 h-20 w-full relative flex justify-start items-center duration-200 group-hover:shadow-lg group-hover:shadow-muted
            ring-2 hover:ring-primary ring-transparent ring-offset-background transition-all hover:ring-offset-4'>
                <span className="absolute w-[40%] -bottom-px left-0 h-px bg-gradient-to-r from-neon-pink via-primary"></span>
                {/* <span className="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400 dark:to-blue-400/0"></span> */}
                {/* <div className='absolute w-full h-full gradient-border top-0 left-0 -z-10'></div> */}
                <div className='flex gap-2 items-center justify-center'>
                    <Icon size='md' iconName={snippet.logo?.toLowerCase()!} />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {snippet.title}
                    </h3>
                </div>
            </Card>
        </Link>
    )
}
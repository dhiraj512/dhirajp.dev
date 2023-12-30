import { Snippet, allSnippets } from 'contentlayer/generated'
import { getSnippet } from '@/lib/getSnippet'
import { Metadata } from 'next';
import BackButton from '@/components/mdx/back'
import Icon from '@/components/dashboard/icon'
import Mdx from '@/components/mdx/mdx-components'
import ScrollToTop from '@/components/scrollToTop'
import { format, parseISO } from 'date-fns'


interface ParamProps {
    params: {
        slug: string
    }
}

export const generateStaticParams = async () => allSnippets.
    filter((snippet) => snippet.isPublished === true).
    map((snippet) => ({ slug: snippet.slug }))

export function generateMetadata({ params }: ParamProps): Metadata | undefined {

    const snippet = getSnippet(params.slug)
    if (!snippet) {
        return;
    }
    const { title, slug, description, publishedDate, tags } = snippet;

    return {
        title,
        description,
        publisher: 'dhirajp',
        keywords: tags,
        openGraph: {
            title,
            description,
            url: `https://dhirajp.vercel.app/${slug}`,
            type: 'article',
            publishedTime: publishedDate,
            tags,
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


export default function SnippetPage({ params }: ParamProps) {
    const snippet = getSnippet(params.slug)
    return <SnippetDetails snippet={snippet} />
}

function SnippetDetails({ snippet }: { snippet: Snippet }) {
    return (
        <article className='mx-4 my-10 md:my-6'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-3xl my-2 font-bold'>{snippet.title}</h1>
                <div className="flex gap-4">
                    <div className='flex gap-1 items-center px-2.5 py-1 rounded-md bg-accent text-xs font-medium text-accent-foreground'>
                        <Icon iconName='calendar' size='sm' />
                        <time>{format(parseISO(snippet.publishedDate), "LLLL d, yyyy")}</time>
                    </div>
                    <div className='flex gap-2'>
                        {snippet.tags.map((tag, index) => (
                            <span key={index} className="px-2.5 py-1 before:content-['#'] rounded-md text-xs font-medium bg-accent text-accent-foreground">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <Mdx code={snippet.body.code} />
            <BackButton className='justify-start' />
            <div className='flex mx-2 justify-end my-4'>
                <ScrollToTop />
            </div>
        </article>
    )
}

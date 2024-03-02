import Icon from "@/components/dashboard/icon";

export default function ViewCounter({
    slug,
    allViews,
}: {
    slug: string;
    allViews: {
        slug: string;
        count: number;
    }[];
    trackView?: boolean;
}) {
    const viewsForSlug = allViews && allViews.find((view) => view.slug === slug);
    const number = new Number(viewsForSlug?.count || 0);

    return (
        <div className='flex gap-1 items-center px-2.5 py-1 rounded-md bg-accent text-xs font-medium text-accent-foreground'>
            <Icon iconName='eye' size='sm' />
            <span>
                {`${number.toLocaleString()} views`}
            </span>
        </div>
    );
}
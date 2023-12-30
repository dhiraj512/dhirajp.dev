'use client'

import React from 'react'
import { Button } from './ui/button';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Props {
    tags: string[],
    searchParams: { [key: string]: string }
}

export default function Tags({ tags, searchParams }: Props) {
    const pathname = usePathname();
    const router = useRouter();
    const searchedTagTag = searchParams.tag ?? ""
    const isActive = (item: string) => {
        const state = (!searchedTagTag && item === "all") || item === searchedTagTag
        return state
    }

    const showAll = () => {
        const params = new URLSearchParams(searchParams);
        params.delete("tag");
        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={showAll} className={cn(isActive("all") ? "bg-primary/30 border-ring hover:bg-primary/20" : "")} >
                Show All
            </Button>
            {tags.map((item) => {
                const params = new URLSearchParams(searchParams);
                params.set("tag", item);
                return (
                    <Button key={item} variant="outline" size="sm" onClick={() => router.replace(`${pathname}?${params.toString()}`)}
                        className={cn(isActive(item) ? "bg-primary/30 border-ring hover:bg-primary/20" : "")} >
                        {item}
                    </Button>
                );
            })}
        </div>
    )
}

import { cn } from '@/lib/utils'
import React from 'react'

export default function PageLayout({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <main className={cn("mx-auto container max-w-2xl", className)}>
            {children}
        </main>
    )
}

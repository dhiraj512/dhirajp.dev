'use client'

import React from 'react'
import { useScroll } from '@/hooks/useScroll'
import { Button } from './ui/button';
import Icon from './dashboard/icon';
import { cn } from '@/lib/utils';

export default function ScrollToTop({ className }: { className?: string }) {

    const isVisible = useScroll();

    // Scroll to top on button click
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return isVisible && (
        <Button onClick={scrollToTop} variant="outline" size="icon"
            className={cn('fixed bottom-8 bg-accent bg-opacity-60 text-accent-foreground',
                className)}>
            <Icon iconName='up' className='' />
        </Button>
    )
}

'use client';

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col gap-4 items-center justify-center my-32">
            <div>
                <h1 className="text-4xl font-bold text-center">Error</h1>
                <p className="text-2xl">{error.message}</p>
            </div>
            <Button onClick={reset}>Try again</Button>
        </div>
    );
}
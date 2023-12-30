'use client'

import { useEffect, useState } from 'react'

export const useScroll = () => {
    const [scrollY, setScrollY] = useState(false)

    // Sticky Scroll Listener
    useEffect(() => {
        function handleScroll() {
            const position = window.scrollY
            setScrollY(position > 0)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return scrollY
}

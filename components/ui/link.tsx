import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface Props {
    title: string
    href: string
    style?: "accent" | "gradient"
}
const accentHighlight = clsx(
    "text-primary hover:text-primary",
    "after:bg-primary after:hover:bg-primary"
)
const animatedHighlight = clsx(
    "text-[#366bff] ",
    "hover:bg-[linear-gradient(65deg,#44ff9a,#44b0ff,#8b44ff,#f64,#ebff70)] hover:bg-clip-text hover:text-transparent hover:animate-gradient hover:bg-[length:250%_100%] hover:transition-transform hover:ease-in-out",
    "after:bg-[linear-gradient(65deg,#44ff9a,#44b0ff,#8b44ff,#f64,#ebff70)] after:hover:bg-[length:250%_100%] after:hover:animate-gradient after:hover:bg-[linear-gradient(65deg,#44ff9a,#44b0ff,#8b44ff,#f64,#ebff70)]"
)

export default function CustomLink({
    title,
    href,
    style = "gradient",
}: Props) {

    const isInternalLink = href && href.startsWith('/')
    const isAnchorLink = href && href.startsWith('#')

    if (isAnchorLink) {
        return (
            <a href={href}>
                {title}
            </a>
        )
    }

    return (
        <Link
            className={clsx(
                style === "accent" ? accentHighlight : animatedHighlight,
                "font-bold relative w-fit whitespace-wrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full hover:after:w-full",
                "after:ease after:transition-[width] after:duration-200 hover:after:ease-out"
            )}
            href={href}
            target={isInternalLink ? "_self" : "_blank"}
            rel="noreferrer"
        >
            {title}
            {!isInternalLink && "↗"}
        </Link>
    )
}
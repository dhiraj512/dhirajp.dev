"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import React from "react"
import { cn } from "@/lib/utils"
import { useScroll } from "@/hooks/useScroll"
import Icon from "./icon"
import { buttonVariants } from "../ui/button"
import { ModeToggle } from "./themeToggle"
import Tooltip from "../ui/tooltip"


export default function NavBar() {
    const showBlur = useScroll()
    const pathname = usePathname()
    const isPage = pathname.split("/") && pathname !== "/"
    const pageUrl = pathname.split("/" || "")[1].replace(/-/g, " ")
    const pageTitle = pageUrl.charAt(0).toUpperCase() + pageUrl.slice(1)


    const navItems = [
        {
            title: "Projects",
            href: "/projects",
            icon: "briefcase",
        },
        {
            title: "Experiments",
            href: "/lab",
            icon: "flask",
        },
        {
            title: "Snippets",
            href: "/snippets",
            icon: "filecode",
        },
    ];

    return (
        <header className={cn(
            "sticky top-0 z-50",
            "transition-[background-color] duration-100",
            showBlur
                ? "backdrop-blur bg-background/20"
                : "backdrop-blur-none bg-background/0",
        )}>
            <div className="max-w-screen-sm mx-2 sm:mx-auto">
                <nav className="h-12 flex items-center justify-between gap-0.5">
                    <div className="inline-flex justify-center items-center gap-0.5 font-semibold">
                        <Link title="Dheeraj" href="/" className="flex -space-x-2 bg-primary text-primary-content hover:blur-[1px] p-1 mx-1 rounded-sm">
                            <Icon iconName='d' className='stroke-[3] hover:text-current' />
                        </Link>
                        {isPage && (
                            <>
                                <Icon iconName='slash' className='rotate-[80deg]' />
                                <h1 className="text-lg cursor-pointer">{pageTitle}</h1>
                            </>
                        )}
                    </div>
                    <div className="flex-grow" />
                    {navItems.map((item, id) => (
                        <React.Fragment key={id}>
                            <Tooltip content={item.title}>
                                <Link href={item.href} className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}>
                                    <Icon iconName={item.icon} size="md" />
                                </Link>
                            </Tooltip>
                            <div className="divider-y h-5" />
                        </React.Fragment>
                    ))}
                    <ModeToggle />
                </nav>
                <div className={cn("divider-x transition-opacity duration-300", showBlur ? "opacity-70" : "opacity-0")} />
            </div>
        </header >
    )
}

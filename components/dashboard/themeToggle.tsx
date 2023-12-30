"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import Icon from "./icon"
import Tooltip from "../ui/tooltip"
import { useState } from "react"

export function ModeToggle() {
    const { setTheme } = useTheme()
    const [mountTheme, setMountTheme] = useState("light")
    const handleThemeChange = (theme: string) => {
        setTheme(theme)
    }

    return (
        <Tooltip content="Toggle theme" side="bottom">
            <Button variant="ghost" size="icon" onClick={() => {
                setMountTheme(mountTheme === "dark" ? "light" : "dark")
                handleThemeChange(mountTheme)
            }}>
                <Icon iconName="sun" size="md" className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Icon iconName="moon" size="md" className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </Tooltip>
    )
}

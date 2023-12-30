"use client"

import React from "react"
import { useCallback, useEffect, useState, useTransition } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { FaXmark } from "react-icons/fa6"

const Search = ({ searchParams }: { searchParams?: { [key: string]: string } }) => {
    const [inputValue, setInputValue] = useState<string>("")
    const [debouncedValue, setDebouncedValue] = useState<string>("")
    const [mounted, setMounted] = useState<boolean>(false)
    const router = useRouter()
    const pathname = usePathname()
    // const [isPending, startTransition] = useTransition()

    const handleSearchParams = useCallback(
        (debouncedValue: string) => {
            let params = new URLSearchParams(searchParams)
            if (debouncedValue.length > 0) {
                params.set("search", debouncedValue)
            } else {
                params.delete("search")
            }
            // startTransition(() => {
            router.replace(`${pathname}?${params.toString()}`)
            // })
        },
        [pathname, router, searchParams]
    )

    // EFFECT: Set Initial Params
    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        const searchQuery = params.get("search") ?? ""
        setInputValue(searchQuery)
    }, [searchParams])

    // EFFECT: Set Mounted
    useEffect(() => {
        if (debouncedValue.length > 0 && !mounted) {
            setMounted(true)
        }
    }, [debouncedValue, mounted])

    // EFFECT: Debounce Input Value
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(inputValue)
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [inputValue])

    // EFFECT: Search Params
    useEffect(() => {
        if (mounted) handleSearchParams(debouncedValue)
    }, [debouncedValue, handleSearchParams, mounted])

    const clearSearch = () => {
        setInputValue("")
        const params = new URLSearchParams(searchParams)
        params.delete("search")
        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="relative my-4">
            <Input
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}
                placeholder="Search..."
                className="text-base"
            />
            {inputValue && <Button variant="ghost" size="icon" className="absolute right-0 top-0"
                onClick={clearSearch}>
                <FaXmark className="w-4 h-4" />
            </Button>}
        </div>
    )
}

export default Search
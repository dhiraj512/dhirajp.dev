"use client"

import React from "react";
import { usePathname } from "next/navigation"
import Link from "next/link";
import { cn } from "@/lib/utils";
import Icon from "../dashboard/icon";
import { buttonVariants } from "../ui/button";


interface IBackButton {
    className?: string
}

export default function BackButton({ className }: IBackButton) {
    const asPath = usePathname();
    const prevUrl = asPath.slice(0, asPath.lastIndexOf('/'));

    return (
        <Link href={prevUrl} className={cn(buttonVariants({ variant: "outline" }), className)}>
            <Icon iconName="back" className="mr-1" />
            <span>Back</span>
        </Link>
    )
}
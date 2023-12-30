"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const TooltipRoot = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
    <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
            "z-50 overflow-hidden border border-input rounded-md bg-popover px-3 py-1.5 text-xs text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
        )}
        {...props}
    />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName


interface TooltipProps {
    children: React.ReactNode
    content: React.ReactNode
    className?: string
    side?: "top" | "right" | "bottom" | "left";
    delayDuration?: 0 | 50 | 100 | 200 | 300 | 400 | 500;
}

export default function Tooltip({ children, content, className, side = "bottom" }: TooltipProps) {
    return (
        <TooltipProvider>
            <TooltipRoot delayDuration={100}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent side={side} className={className}>{content}</TooltipContent>
            </TooltipRoot>
        </TooltipProvider>
    )
}
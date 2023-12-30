import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        slate: 'bg-slate-800 text-slate-300',
        pink: 'bg-neon-pink text-white',
        blue: 'bg-neon-blue text-white',
        cyan: 'bg-neon-cyan text-white',
        violet: 'bg-neon-violet text-violet-100',
        orange: 'bg-neon-orange text-white',
        none: ""
      },
    },
    defaultVariants: {
      variant: "pink",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { Badge } from './badge';

const boundaryVariants = cva(
  "rounded-md", {
  variants: {
    variant: {
      slate: "border-slate-700",
      pink: "border-neon-pink",
      blue: "border-neon-blue",
      cyan: "border-neon-cyan",
      violet: "border-neon-violet",
      orange: "border-neon-orange",
      none: ""
    },
    size: {
      small: "p-3 lg:p-5",
      large: "p-4 lg:p-9",
      none: ""
    },
  },
  defaultVariants: {
    variant: "pink",
    size: "small"
  },
})

interface BoundaryProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof boundaryVariants> {
  labels?: string[];
  color?: 'slate' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange' | 'none';
}

const Boundary = ({ children, className, size, color = "pink", labels, ...rest }: BoundaryProps) => {
  return (
    <div className={cn('relative border border-dashed', boundaryVariants({ variant: color, size }), className)} {...rest}>
      {labels && <div className={cn('absolute -top-[11px] text-xs leading-4 tracking-widest', "border-none")}>
        {labels.map((label, index) => (
          <Badge variant={color} key={index} className={cn("border-none", index !== 0 && "ml-2")}>{label}</Badge>
        ))}
      </div>}
      {children}
    </div>
  );
};

export { Boundary, boundaryVariants };

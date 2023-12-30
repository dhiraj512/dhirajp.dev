'use client'

import * as React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import type { MDXComponents } from "mdx/types"
import { cn } from "@/lib/utils"
import { Callout } from "./callout"
import { MdxCard } from "./card"
import Link from "next/link"
import { firaCode } from "@/lib/fonts"
import { Button } from "../ui/button"
import Icon from "../dashboard/icon"
import DemoComponent from "./demo"
import CustomLink from "../ui/link"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> { }

const Pre = ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {

  const ref = React.useRef<HTMLPreElement>(null)
  const [copied, setCopied] = React.useState(false)

  const handleCopySource = () => {
    if (typeof window === 'undefined' || !ref.current) return
    const text = ref.current.innerText
    window.navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return <div className="relative">
    <pre
      className={cn(
        "group overflow-x-auto p-4",
        className
      )}
      ref={ref}
      {...props}
    >
      <Button
        className="absolute top-2 right-2 hidden border-none text-white group-hover:flex"
        variant="outline"
        size="icon"
        onClick={() => handleCopySource()}
      >
        {copied ? <Icon iconName="clipboardcheck" size="md" /> : <Icon iconName="clipboard" size="md" />}
      </Button>
      {props.children}
    </pre>
  </div>
}

const components = {
  h1: ({ className, ...props }: HeadingProps) => (
    <h1 id="this-is-heading-1"
      className={cn(
        "mt-10 scroll-m-20 md:text-3xl text-2xl font-bold tracking-tight ",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HeadingProps) => (
    <h2 id="this-is-heading-2"
      className={cn(
        "mt-8 scroll-m-20 pb-1 text-2xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HeadingProps) => (
    <h3 id="this-is-heading-3"
      className={cn(
        "mt-6 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a target="_blank" className={cn("hover:underline underline-offset-2 text-neon-blue", className)} rel="noopener noreferrer" {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 text-foreground [&:not(:first-child)]:mt-3", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-2 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-2 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-3 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "rounded border text-foreground bg-primary/30 border-primary font-medium px-1 py-px",
        firaCode.className,
        className
      )}
      {...props}
    />
  ),
  pre: Pre,
  Link,
  CustomLink,
  Image,
  Callout,
  Card: MdxCard,
  Demo: DemoComponent
}


interface MdxProps {
  code: string
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx my-6">
      <Component components={{ ...components } as MDXComponents} />
    </div>
  )
}

import { cn } from '@/lib/utils'
import React from 'react'
import { IconType } from 'react-icons'
import {
    FaSlash, FaRegFileCode, FaCodepen, FaXTwitter,
    FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown,
    FaRegCalendar, FaHashtag
} from 'react-icons/fa6'
import { PiFlaskFill, PiBracketsCurlyBold } from 'react-icons/pi'
import { RxMoon, RxSun, RxQuestionMarkCircled } from "react-icons/rx";
import { BiBriefcase, BiPencil, BiLogoNetlify, BiHome } from 'react-icons/bi'
import { LuGithub } from 'react-icons/lu'
import {
    SiAdobephotoshop, SiVisualstudiocode, SiRaspberrypi, SiMultisim, SiCss3,
    SiFirebase, SiGit, SiHtml5, SiJavascript, SiMarkdown, SiNextdotjs, SiPostgresql,
    SiEspressif, SiPython, SiReact, SiSass, SiSpotify, SiTailwindcss, SiTypescript,
    SiVercel, SiArduino, SiSupabase, SiOpenai, SiC
} from 'react-icons/si'
import { TbLetterD, TbCopy, TbClipboard, TbBrandGithubCopilot, TbClipboardCheck } from 'react-icons/tb'
import { VscTerminalCmd } from 'react-icons/vsc'

const sizes = {
    sm: "w-3 h-3",
    default: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-7 h-7",
    xl: "w-9 h-9",
}

interface Props {
    iconName: string
    className?: string
    size?: keyof typeof sizes
    colored?: boolean
}

export default function Icon({ iconName, className, size = "default", colored = true }: Props) {
    const Icon = icons[iconName.toLowerCase()]
    return Icon && <Icon className={cn(sizes[size], colored && iconColors[iconName.toLowerCase()], className)} />
}

const icons: {
    [key: string]: IconType
} = {
    d: TbLetterD,
    copy: TbCopy,
    clipboard: TbClipboard,
    clipboardcheck: TbClipboardCheck,
    sun: RxSun,
    moon: RxMoon,
    html: SiHtml5,
    css: SiCss3,
    back: FaArrowLeft,
    forward: FaArrowRight,
    up: FaArrowUp,
    down: FaArrowDown,
    calendar: FaRegCalendar,
    tag: FaHashtag,
    javascript: SiJavascript,
    typescript: SiTypescript,
    spotify: SiSpotify,
    slash: FaSlash,
    filecode: FaRegFileCode,
    flask: PiFlaskFill,
    brackets: PiBracketsCurlyBold,
    question: RxQuestionMarkCircled,
    briefcase: BiBriefcase,
    pencil: BiPencil,
    netlify: BiLogoNetlify,
    home: BiHome,
    codepen: FaCodepen,
    twitter: FaXTwitter,
    github: LuGithub,
    terminal: VscTerminalCmd,
    c: SiC,
    postgresql: SiPostgresql,
    espressif: SiEspressif,
    multisim: SiMultisim,
    raspberrypi: SiRaspberrypi,
    arduino: SiArduino,
    vscode: SiVisualstudiocode,
    react: SiReact,
    nextjs: SiNextdotjs,
    python: SiPython,
    openai: SiOpenai,
    supabase: SiSupabase,
    firebase: SiFirebase,
    mdx: SiMarkdown,
    git: SiGit,
    tailwindcss: SiTailwindcss,
    vercel: SiVercel,
    sass: SiSass,
    photoshop: SiAdobephotoshop,
    copilot: TbBrandGithubCopilot,
}

const iconColors: {
    [key: string]: string
} = {
    html: "text-[#e34f26]",
    css: "text-[#264de4]",
    javascript: "text-[#ffca28]",
    typescript: "text-[#007acc]",
    spotify: "text-[#1db954]",
    tailwindcss: "text-[#06b6d4]",
    react: "text-[#61dbfb]",
    python: "text-[#3776ab]",
    supabase: "text-[#3BD090]",
    firebase: "text-[#ffca28]",
    git: "text-[#f34f29]",
    sass: "text-[#c69]",
    photoshop: "text-[#31a8ff]",
    multisim: "text-[#0070c0]",
    raspberrypi: "text-[#c51a4a]",
    arduino: "text-[#00979d]",
    vscode: "text-[#007acc]",
    netlify: "text-[#00c7b7]",
}
import CustomLink from "@/components/ui/link"
import { cn } from "@/lib/utils";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects",
    description: "collection of projects"
}

export default function Projects() {
    return <div className="border-b mt-10">
        {projects.map((secret) => (
            <div key={secret.title} className="grid grid-cols-7 space-y-4">
                <div className="flex flex-col items-center justify-center h-full col-span-1">
                    <aside className="h-full border-l" />
                    {secret.year && <aside className={cn("text-xs font-semibold", "px-2")}>{secret.year}</aside>}
                    <aside className="h-full border-l" />
                </div>
                <div className="flex flex-col col-span-6">
                    <CustomLink title={secret.title} href={secret.href} />
                    <p className="">{secret.description}</p>
                </div>
            </div>
        ))}
    </div>
}

interface IProjects {
    title: string;
    description: string;
    month: string;
    year?: number;
    href: string;
}

const projects: IProjects[] = [
    {
        title: "My Personal Website",
        description: `My personal website built with NextJs, Tailwindcss, Shadcn-ui, Contentlayer.`,
        href: "https://github.com/dhiraj512/dhirajp.dev",
        month: "October",
    },
    {
        title: "Image-Gallery",
        description: `Image Gallery using supabase as database and cloudinary, ImageKit for image hosting.`,
        href: "https://github.com/dhiraj512/Image-Gallery",
        month: "July",
    },
    {
        title: "Plant Monitoring System (IoT)",
        description: `To monitor the plant's health and soil moisture using NodeMcu ESP8266 and send the data to the server (Blynk Cloud).`,
        href: "https://github.com/dhiraj512/Plant-monitoring-system",
        year: 2023,
        month: "May",
    },
    {
        title: "NextJs-Strapi Blog App",
        description: `A Blog app built with React, Typescript, Strapi, Tailwindcss.`,
        href: "https://github.com/dhiraj512/NextJS-blog-app",
        month: "September",
    },
    {
        title: "Nextjs-mdx static blog",
        description: `A Blog app built with React, Typescript, MDX, Tailwindcss.`,
        href: "https://github.com/dhiraj512/next-md-static-blog",
        month: "August",
    },
    {
        title: "Password Generator",
        description: `A Password generator with strength meter. Built with React, Typescript and styled with Tailwindcss.`,
        href: "https://github.com/dhiraj512/password-generator",
        month: "January",
        year: 2022,
    },
    {
        title: "Download Time Calculator",
        description: `A simple app to calculate the time required to download a File.`,
        href: "https://github.com/dhiraj512/download-time-calculator",
        month: "March",
        year: 2021,
    },
];
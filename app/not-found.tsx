
import Icon from "@/components/dashboard/icon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center my-32">
            <div>
                <h1 className="text-4xl font-bold text-center">404</h1>
                <p className="text-2xl">Page Not Found</p>
            </div>
            <Link href="/" className={cn(buttonVariants({ variant: "outline" }),
                "items-center justify-center gap-2")}>
                <Icon iconName="home" />
                <span>
                    Go Home
                </span>
            </Link>
        </div>
    )
}
import Spotify from "@/components/dashboard/Spotify"
import Icon from "@/components/dashboard/icon"
import HoverCard from "@/components/ui/hoverCard"
import Tooltip from "@/components/ui/tooltip"
import { siteTech, skills, social } from "@/lib/data"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-start my-14 mx-6">
      <h1 className={cn("text-3xl font-bold")}>Dhiraj Pandey</h1>
      <div className="text-base tracking-tight space-y-1">
        <ul>
          <li>
            Coder by interest.
          </li>
          <li>
            Maker by passion.
          </li>
          <li>
            Electrical Engineer by profession.
          </li>
        </ul>
      </div>
      <div className='my-4 flex gap-2 max-w-[18rem] flex-wrap '>
        {skills.map((t, id) => (
          <Tooltip key={id} content={t} side="top" >
            <Icon iconName={t.toLowerCase()} className="cursor-pointer" size="md" />
          </Tooltip>
        ))}
      </div>
      <div className='flex items-center gap-2'>
        {social.map((s) => (
          <Link href={s.link} target="_blank" key={s.name}>
            <Tooltip content={`Find me on ${s.name}`} side="top" >
              <Icon iconName={s.name.toLowerCase()} size='md' />
            </Tooltip>
          </Link>
        ))}
      </div>
      <Spotify />
      <div className="flex gap-2 items-center">
        <h3 className="font-medium">Built with:</h3>
        {siteTech.map((t, id) => (
          <HoverCard key={id} content={t.description}>
            {t.image ? <Image src={t.image} alt={t.title} className="rounded-sm cursor-pointer" width={20} height={20} />
              : <Icon iconName={t.title.toLowerCase()} className="cursor-pointer" size="md" />}
          </HoverCard>
        ))}
      </div>
    </div>
  )
}


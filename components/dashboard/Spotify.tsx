'use client'

import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import fetcher from "@/lib/fetcher";
import Icon from "./icon";
import HoverCard from "../ui/hoverCard";

type Song = {
  name: string
  artist: string
  album: string
  albumImage: string
  songUrl: string
  isPlaying?: boolean
}

export default function Spotify() {
  const { data } = useSWR<Song>("/api/now-playing", fetcher);
  return (
    <div className="my-4">
      {data?.isPlaying ? (
        <WhenPlaying song={data} />
      ) : (
        <NotPlaying />
      )}
    </div>
  )
}


function NotPlaying() {
  return (
    <div className="flex w-fit h-8 px-2 gap-2 items-center justify-between border bg-muted/60 rounded-[4px]">
      <Icon iconName="spotify" />
      <h4 className="font-semibold text-sm text-base-content">
        Not Playing
      </h4>
    </div>
  );
}

function WhenPlaying({ song }: { song: Song }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h4 className="font-medium text-sm">Now Playing</h4>
      <Link
        target={"_blank"}
        href={song.songUrl}
        className="flex w-fit px-2 py-1 items-center justify-between border border-[#1DB954] relative rounded-[4px]">
        <div className="flex items-center gap-2 ">
          <div className="w-8 h-8">
            <Image
              alt={song.name}
              src={song.albumImage}
              className=" rounded-full animate-[spin_5s_linear_infinite]"
              width={40}
              height={40}
              quality={100}
              placeholder="blur"
              blurDataURL={song.albumImage} />
          </div>
          <div className="flex flex-col leading-3">
            <h3 className="font-semibold text-sm">
              {song.name.length > 25 ? `${song.name.substring(0, 30)}...` : song.name}
            </h3>
            <p className="text-xs">
              {song.artist.length > 29 ? `${song.artist.substring(0, 30)}...` : song.artist}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

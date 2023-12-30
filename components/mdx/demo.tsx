import React from 'react'
import Spotify from '../dashboard/Spotify'
import { ModeToggle } from '../dashboard/themeToggle'

export default function DemoComponent({ thing }: { thing: string }) {
    const Component = components[thing.toLowerCase()]
    return <Component />
}

const components: {
    [key: string]: React.FC
} = {
    spotify: Spotify,
    theme: ModeToggle,
}
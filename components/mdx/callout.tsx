import { cn } from "@/lib/utils"
import { IoWarning, IoInformationCircle, IoAlertCircle } from "react-icons/io5"
import { IconType } from "react-icons"

interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  type?: "default" | "info" | "warning" | "danger"
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {

  type IconTypeProp = {
    [key: string]: IconType
  }

  const IconType: IconTypeProp = {
    info: IoInformationCircle,
    warning: IoAlertCircle,
    danger: IoWarning,
  }

  const ColorType = {
    info: "text-foreground bg-neon-blue/60 border-neon-blue",
    warning: "text-foreground bg-neon-orange/60 border-neon-orange",
    danger: "text-foreground bg-neon-red/60 border-neon-red",
  }

  const iconColor = {
    info: "text-neon-blue",
    warning: "text-neon-orange",
    danger: "text-neon-red",
  }

  const Icon = IconType[type]

  return (
    <div
      className={cn("my-6 flex items-start rounded-md border border-l-4 p-4",
        type !== 'default' && ColorType[type])}
      {...props}
    >
      {type !== 'default' && (<Icon className={cn("w-6 h-6 mr-4", iconColor[type])} />)}
      <div>{children}</div>
    </div>
  )
}
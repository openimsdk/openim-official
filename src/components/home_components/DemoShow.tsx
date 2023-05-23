import DemoRaw from "@/components/home_components/DemoRaw"

export type demosType = {
  name: string
  href: string
  border_color: string
  hover_bg: string
  color: string
}

const demos = [
  {
    name: "openim-flutter-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-Flutter-Demo",
    color: "text-teal-500",
    border_color: "border-teal-500",
    hover_bg: "hover:bg-teal-500",
  },
  {
    name: "openim-android-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-Android-Demo",
    color: "text-fuchsia-500",
    border_color: "border-fuchsia-500",
    hover_bg: "hover:bg-fuchsia-500",
  },
  {
    name: "openim-ios-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-iOS-Demo",
    color: "text-indigo-500",
    border_color: "border-indigo-500",
    hover_bg: "hover:bg-indigo-500",
  },
  {
    name: "openim-pc-web-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-PC-Web-Demo",
    color: "text-rose-500",
    border_color: "border-rose-500",
    hover_bg: "hover:bg-rose-500",
  },
  {
    name: "openim-uniapp-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-Uniapp-Demo",
    color: "text-amber-500",
    border_color: "border-amber-500",
    hover_bg: "hover:bg-amber-500",
  },
  {
    name: "openim-flutter-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-Flutter-Demo",
    color: "text-teal-500",
    border_color: "border-teal-500",
    hover_bg: "hover:bg-teal-500",
  },
  {
    name: "openim-android-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-Android-Demo",
    color: "text-fuchsia-500",
    border_color: "border-fuchsia-500",
    hover_bg: "hover:bg-fuchsia-500",
  },
  {
    name: "openim-ios-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-iOS-Demo",
    color: "text-indigo-500",
    border_color: "border-indigo-500",
    hover_bg: "hover:bg-indigo-500",
  },
  {
    name: "openim-pc-web-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-PC-Web-Demo",
    color: "text-rose-500",
    border_color: "border-rose-500",
    hover_bg: "hover:bg-rose-500",
  },
  {
    name: "openim-uniapp-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-Uniapp-Demo",
    color: "text-amber-500",
    border_color: "border-amber-500",
    hover_bg: "hover:bg-amber-500",
  },
]
const DemoShow = () => {
  return (
    <div
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent,black 20%, black 70%,transparent)",
      }}
      className="mx-[8vw] h-64 overflow-hidden"
    >
      <DemoRaw demos={demos} />
    </div>
  )
}

export default DemoShow

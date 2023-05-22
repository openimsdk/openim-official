import Link from "next/link"
import { CodeBracketIcon } from "@heroicons/react/20/solid"
import { demosType } from "@/components/home_components/DemoShow"

const DemoRaw = ({ demos }: { demos: demosType[] }) => {
  return (
    <div className="flex flex-row flex-nowrap py-1">
      {demos.map((demo) => {
        return (
          <Link
            key={demo.name}
            href={demo.href}
            className={`mx-1 flex flex-shrink-0 items-center  border hover:text-black ${demo.border_color} px-4 py-2 transition ${demo.hover_bg} ${demo.color}`}
          >
            <CodeBracketIcon className="mr-3 h-5 w-5" />
            <p>{demo.name}</p>
          </Link>
        )
      })}
    </div>
  )
}
export default DemoRaw

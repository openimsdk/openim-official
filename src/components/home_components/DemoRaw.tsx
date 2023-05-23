import Link from "next/link"
import styles from "./styles.module.scss"
import { CodeBracketIcon } from "@heroicons/react/20/solid"
import { demosType } from "@/components/home_components/DemoShow"

const DemoRaw = ({ demos }: { demos: demosType[] }) => {
  return (
    <div className="relative flex flex-row  justify-start py-1 sm:flex-nowrap">
      {demos.map((demo, index) => {
        return (
          <Link
            key={index}
            href={demo.href}
            className={`mx-1 my-1 flex flex-shrink-0 items-center  border hover:text-black 
            ${demo.border_color} px-3 py-2 transition ${demo.hover_bg} ${demo.color} ${styles.cell}`}
          >
            <CodeBracketIcon className="mr-2 h-5 w-5" />
            <p className="text-xs">{demo.name}</p>
          </Link>
        )
      })}
    </div>
  )
}
export default DemoRaw

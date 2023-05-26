import Link from "next/link";
import styles from "./styles.module.scss";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import { SourceItem } from "./SourcesSection";

const SourceRow = ({ sources }: { sources: SourceItem[] }) => {
  return (
    <div
      className={`relative flex flex-row justify-start py-1 sm:flex-nowrap ${styles.cell}`}
    >
      {sources.map((source, index) => {
        return (
          <Link
            key={index}
            href={source.href}
            className={`mx-1 my-1 flex flex-shrink-0 items-center rounded border hover:text-black
            ${source.border_color} px-3 py-2 transition ${source.hover_bg} ${source.color}`}
          >
            <CodeBracketIcon className="mr-2 h-5 w-5" />
            <p className="text-xs">{source.name}</p>
          </Link>
        );
      })}
    </div>
  );
};
export default SourceRow;

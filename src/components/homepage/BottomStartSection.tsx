import { Dictionary } from "@/dictionaries/en";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const BottomStartSection = ({
  dictionary,
  isZh,
}: {
  dictionary: Dictionary;
  isZh: boolean;
}) => {
  return (
    <div className="mx-[8vw] flex flex-col items-center py-20 sm:py-40">
      <div>
        <span className="text-xl text-[#006CFFFF] sm:text-2xl md:text-3xl ">
          {dictionary["home"].part9.title_pre}
        </span>
        <span className="text-xl sm:text-2xl md:text-3xl">
          {dictionary["home"].part9.title}
        </span>
      </div>
      <p className=" pt-4 text-xs sm:text-lg">{dictionary["home"].part9.desc}</p>
      <div className="mb-6 mt-10 flex flex-row md:mt-24">
        <Link
          className="btn_polygon flex h-12 w-36 flex-row items-center justify-center  bg-[#006CFFFF] transition-colors hover:bg-[#008FFFFF] md:h-16 md:w-48 md:flex-shrink-0"
          href="https://github.com/OpenIMSDK"
        >
          <p>{dictionary["home"].part9.btn_begin}</p>
        </Link>

        <div className="relative ml-5 h-12 w-36 md:h-16 md:w-48">
          <div className="btn_polygon_border h-12 w-36 bg-[#2c2c2c] md:h-16 md:w-48"></div>

          <Link
            className={clsx(
              "absolute bottom-0 left-0 right-0 top-0 z-10 mx-4 flex h-12 w-36 items-center md:h-16 md:w-48",
              isZh && "!mx-0 justify-center",
            )}
            href="https://docs.openim.io"
          >
            <p>{dictionary["home"].part9.btn_docs}</p>
            {isZh && <ChevronRightIcon className="h-6 w-6 text-[#006CFFFF] sm:pl-2" />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomStartSection;

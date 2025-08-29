import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Dictionary } from "@/dictionaries/en";
import clsx from "clsx";

const CodeStartSection = ({
  dictionary,
  isZh,
}: {
  dictionary: Dictionary;
  isZh: boolean;
}) => {
  return (
    <div className="mx-[8vw] my-20 sm:my-36 md:flex md:flex-row md:justify-between">
      <div className="w-full sm:pr-2 md:w-1/2 md:pr-5  xl:pr-20">
        <p className="bg-gradient-to-b from-[#006CFFFF] to-[#0062FFFF] bg-clip-text  text-xl font-semibold  text-transparent sm:text-2xl  lg:text-3xl xl:text-4xl">
          OpenIM
        </p>
        <p className="py-5 text-sm sm:text-lg lg:text-2xl">
          {dictionary["home"].part1.en}
        </p>
        <p className="pb-5 text-sm sm:text-lg lg:text-2xl">
          {dictionary["home"].part1.text}
        </p>
        <p className="text-xs sm:text-sm md:text-base">
          {dictionary["home"].part1.desc}
        </p>
        <div className="mb-6 mt-10 flex flex-row justify-center md:mt-24 md:justify-start">
          <Link
            className="btn_polygon flex h-12 w-36 flex-row items-center justify-center bg-[#006CFFFF] transition-colors hover:bg-[#008FFFFF] md:h-16 md:w-48 md:flex-shrink-0"
            href="https://github.com/OpenIMSDK"
          >
            <p>{dictionary["home"].part1.btn_begin}</p>
          </Link>

          <div className="relative ml-5 h-12 w-36 md:h-16 md:w-48">
            <div className="btn_polygon_border h-12 w-36 bg-[#2c2c2c] md:h-16 md:w-48"></div>
            <Link
              className={clsx(
                "absolute bottom-0 left-0 right-0 top-0 z-10 mx-4 flex h-12 w-36 items-center md:h-16 md:w-48",
                isZh && "!mx-0 justify-center",
              )}
              href="https://docs.openim.io/"
            >
              <p>{dictionary["home"].part1.btn_docs}</p>
              {isZh && <ChevronRightIcon className="h-6 w-8 pl-2 text-[#006CFFFF]" />}
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden w-full sm:pl-2 md:block md:w-1/2 md:pl-5 xl:pl-20">
        <Image
          width={520}
          height={433}
          src="/images/code_bg.png"
          quality={75}
          alt="code"
        />
      </div>
    </div>
  );
};

export default CodeStartSection;

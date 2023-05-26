import { Dictionary } from "@/dictionaries/en";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const CommunitySection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div className="relative ">
      <div className="flex flex-row justify-center">
        <span className="pr-1 text-xs font-semibold sm:text-2xl  md:pr-2 lg:text-3xl xl:text-4xl ">
          {dictionary["home"].part2.title_pre}
        </span>
        <span className="text-xs font-semibold  text-[#006CFFFF] sm:text-2xl lg:text-3xl xl:text-4xl">
          {dictionary["home"].part2.title}
        </span>
      </div>
      <p className="mx-[8vw] py-5 text-center text-xs sm:text-base lg:text-xl">
        {dictionary["home"].part2.desc}
      </p>
      <div className="mx-[8vw] flex flex-row justify-center py-4">
        <div className="relative ml-5 h-12 w-40 md:h-16 md:w-48">
          <div className="btn_polygon_border h-12 w-40 bg-[#2c2c2c] md:h-16 md:w-48"></div>
          <Link
            href="https://github.com/OpenIMSDK"
            className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-12 w-40 flex-row items-center justify-center text-sm md:h-16 md:w-48 md:text-base"
          >
            <Image
              width={16}
              height={16}
              src="/fonts/github.png"
              alt="github"
              className="mr-3 md:mr-6"
            />
            <p>{dictionary["home"].part2.github}</p>
          </Link>
        </div>
        <div className="relative ml-3 h-12 w-40 md:h-16 md:w-48">
          <div className="btn_polygon_border h-12 w-40 bg-[#2c2c2c] md:h-16 md:w-48"></div>
          <Link
            href="https://join.slack.com/t/openimsdk/shared_invite/zt-1tmoj26uf-_FDy3dowVHBiGvLk9e5Xkg"
            className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-12 w-40 flex-row items-center justify-center text-sm md:h-16 md:w-48 md:text-base"
          >
            <Image
              width={16}
              height={16}
              src="/fonts/slack.png"
              alt="github"
              className="mr-2 md:mr-4"
            />
            <p>{dictionary["home"].part2.join}</p>
          </Link>
        </div>
      </div>

      <div className="mx-[8vw] flex flex-row justify-center py-10 sm:py-20">
        <div>
          <p className="pb-4 text-3xl font-thin sm:text-4xl">11K</p>
          <p className="text-xs font-thin">GITHUB STARS</p>
        </div>
        <div className="px-6 sm:px-20">
          <p className="pb-4 text-3xl font-thin sm:text-4xl">0.1K</p>
          <p className="text-xs font-thin">Slack MEMBERS</p>
        </div>
        <div>
          <p className="pb-4 text-3xl font-thin sm:text-4xl">2.0K</p>
          <p className="text-xs font-thin">PROJECTS</p>
        </div>
      </div>
      <div
        className="absolute mx-[8vw]"
        style={{
          left: `${-10}vw`,
          bottom: `${-10}vw`,
        }}
      >
        <Image src="/images/honeycomb.png" alt="" width={200} height={200} />
      </div>

      <Image
        className="absolute -bottom-16 right-0 sm:-bottom-32"
        src="/images/arrowdown.png"
        alt=""
        width={20}
        height={30}
      />
    </div>
  );
};

export default CommunitySection;

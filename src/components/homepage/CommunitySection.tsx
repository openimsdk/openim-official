"use client";

import { Dictionary } from "@/dictionaries/en";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

const CommunitySection = ({
  dictionary,
  isZh,
}: {
  dictionary: Dictionary;
  isZh: boolean;
}) => {
  const [star, setStar] = useState("");
  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN as string;
    fetch("https://api.github.com/repos/openimsdk/open-im-server", {
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const starCount = data.stargazers_count as number;
        setStar(`${(starCount / 1000).toFixed(1)}k`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
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
          <div className="dropdown dropdown-hover">
            <div className="btn_polygon_border h-12 w-40 bg-[#2c2c2c] md:h-16 md:w-48"></div>
            <Link
              href="https://join.slack.com/t/openimsdk/shared_invite/zt-2hljfom5u-9ZuzP3NfEKW~BJKbpLm0Hw"
              className={clsx(
                "absolute bottom-0 left-0 right-0 top-0 z-10 mx-4 flex h-12 w-40 flex-row items-center justify-center text-sm md:h-16 md:w-48 md:text-base",
                { "pointer-events-none !mx-0": isZh },
              )}
            >
              <Image
                width={16}
                height={16}
                src="/fonts/slack.png"
                alt="github"
                className="mr-4"
              />
              <p>{dictionary["home"].part2.join}</p>
            </Link>

            <div
              className={clsx(
                "dropdown-content menu rounded-box w-72 -translate-x-1/2 bg-base-100 p-2 shadow md:translate-x-0",
                { hidden: !isZh },
              )}
            >
              <Image
                src="https://openim-1253691595.cos.ap-nanjing.myqcloud.com/WechatIMG20.jpeg"
                alt=""
                width={2187}
                height={1669}
                quality={75}
                className="bg-amber-50"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[8vw] flex flex-row justify-center py-10 sm:py-20">
        <div>
          <p className="h-[76px] pb-4 text-3xl font-thin sm:text-6xl">{star || ""}</p>
          <p className="text-center text-xs font-thin">
            {dictionary["home"].part2.github_stars}
          </p>
        </div>
        <div className="px-6 sm:px-20">
          <p className={clsx("pb-4 text-3xl font-thin sm:text-6xl", { hidden: !isZh })}>
            10.0K
          </p>
          <p className={clsx("pb-4 text-3xl font-thin sm:text-6xl", { hidden: isZh })}>
            2.0K
          </p>
          <p className="text-center text-xs font-thin">
            {dictionary["home"].part2.slack_members}
          </p>
        </div>
        <div>
          <p className="pb-4 text-3xl font-thin sm:text-6xl">2.0K</p>
          <p className="text-center text-xs font-thin">
            {dictionary["home"].part2.projects}
          </p>
        </div>
      </div>
      <div className="absolute -bottom-[10vw] -left-[10vw] mx-[8vw] md:bottom-0">
        <Image src="/images/honeycomb.png" alt="" width={200} height={200} />
      </div>

      <Image
        className="absolute -bottom-16 right-0 sm:bottom-0"
        src="/images/arrowdown.png"
        alt=""
        width={20}
        height={30}
      />
    </div>
  );
};

export default CommunitySection;

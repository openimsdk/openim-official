"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import type { Locale } from "@/i18n-config";
import clsx from "clsx";
import { useState, useEffect } from "react";

const text = {
  zh: {
    docs: "阅读文档",
    start: "开始体验",
    language: "语言",
    navLinks: [
      {
        name: "首页",
        href: "/zh",
        target: undefined,
      },
      {
        name: "商用版本",
        href: "/zh/commercial",
        target: undefined,
      },
      {
        name: "开发者中心",
        href: "https://docs.openim.io",
        target: "_blank",
      },
      // {
      //   name: "定价",
      //   href: "/zh/price",
      //   target: undefined,
      // },
      {
        name: "关于我们",
        href: "/zh/about",
        target: undefined,
      },
    ],
  },
  en: {
    docs: "Document",
    start: "Start experiencing",
    language: "language",
    navLinks: [
      {
        name: "Home",
        href: "/en",
        target: undefined,
      },
      {
        name: "Commercial",
        href: "/en/commercial",
      },
      {
        name: "Developer Center",
        href: "https://docs.openim.io",
      },
      // {
      //   name: "Price",
      //   href: "/en/price",
      //   target: undefined,
      // },
      {
        name: "About us",
        href: "/en/about",
      },
    ],
  },
};

const NavBar = () => {
  const pathname = usePathname();
  const language = pathname.split("/")[1] as Locale;
  const [star, setStar] = useState("");
  // useEffect(() => {
  //   fetch("https://api.github.com/repos/OpenIMSDK/Open-IM-Server", {
  //     // headers: {
  //     //   Authorization: "token {personal_access_token}",
  //     // },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //       const starCount = data.stargazers_count as number;
  //       console.log(starCount);
  //       // 在页面上显示star数目
  //       // ...
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

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

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const isZh = language === "zh";

  return (
    <div className="navbar border-b border-[rgba(255,255,255,.2)] px-[8vw]">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu menu-compact -left-[8vw] mt-3 w-screen rounded-md border border-[#2c2c2c] bg-black shadow"
          >
            {text[language].navLinks.map((link) => {
              const isActive =
                link.href === `/${language}`
                  ? pathname === link.href
                  : pathname.startsWith(link.href);
              return (
                <li
                  key={link.name}
                  className={clsx("border-b border-[#2c2c2c] bg-black text-sm", {
                    "bg-[#2c2c2c]": isActive,
                  })}
                >
                  <Link
                    className={clsx("flex justify-center", {
                      "bg-gradient-to-br from-[#8408ff] to-[#0089ff] bg-clip-text !text-transparent":
                        isActive,
                    })}
                    target={link.target}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mr-0.5 sm:mr-3">
          <Image src="/fonts/logo.png" alt="" width={25} height={25} quality={100} />
        </div>
        <Link
          href={`/${language}`}
          className="btn-ghost btn text-base normal-case sm:text-xl"
        >
          OpenIM
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex flex-row  px-1">
          {text[language].navLinks.map((link) => {
            const isActive =
              link.href === `/${language}`
                ? pathname === link.href
                : pathname.startsWith(link.href);
            return (
              <li key={link.name} className="px-2 text-sm">
                <Link
                  className={
                    isActive
                      ? "bg-gradient-to-br from-[#8408ff] to-[#0089ff] bg-clip-text !text-transparent"
                      : ""
                  }
                  target={link.target}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-1 justify-end">
        <Link
          className="hidden md:mr-8 md:flex md:flex-row md:items-center"
          href="https://github.com/OpenIMSDK/"
        >
          <Image
            width={16}
            height={16}
            src="/images/nav_github_icon.png"
            alt="github"
          />
          {star && <span className="ml-2">{star}</span>}
        </Link>
        {isZh && (
          <button className="hidden sm:btn-sm sm:btn sm:hover:btn-outline sm:bg-black sm:text-white">
            <Link href="https://docs.openim.io" className="text-xs font-normal">
              {text[language].docs}
            </Link>
          </button>
        )}
        {/* <button className="hidden text-xs sm:btn-sm sm:btn sm:mx-3 sm:bg-[#006CFFFF] sm:hover:bg-[#008FFFFF]">
          <Link href="https://github.com/OpenIMSDK" className="text-xs font-normal">
            {text[language].start}
          </Link>
        </button> */}
        {/* eslint-disable-next-line */}
        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="btn-sm btn m-1 flex w-max flex-row bg-black text-white hover:btn-outline"
          >
            <p className="text-xs font-normal">{text[language].language}</p>
            <ChevronDownIcon className="h-4 w-4 text-white"></ChevronDownIcon>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded border border-[#2c2c2c] bg-black text-white shadow"
          >
            <li className="m-[2px] flex items-center text-sm hover:bg-[#2c2c2c]">
              <Link href={redirectedPathName("zh")}>中文</Link>
            </li>
            <li className="m-[2px] flex items-center text-sm hover:bg-[#2c2c2c]">
              <Link href={redirectedPathName("en")}>English</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

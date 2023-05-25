"use client"

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react"
import type { Locale } from "@/i18n-config"

const text = {
  zh: {
    docs: "阅读文档",
    start: "开始体验",
    language: "语言",
    navLinks: [
      {
        name: "首页",
        href: "/zh",
      },
      {
        name: "体验Demo",
        href: "/zh/demo",
      },
      {
        name: "开发者中心",
        href: "/zh/developer",
      },
      {
        name: "定价",
        href: "/zh/price",
      },
      {
        name: "关于我们",
        href: "/zh/about",
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
      },
      {
        name: "Demo",
        href: "/en/demo",
      },
      {
        name: "Developer Center",
        href: "/en/developer",
      },
      {
        name: "Price",
        href: "/en/price",
      },
      {
        name: "About us",
        href: "/en/about",
      },
    ],
  },
}

const NavBar = () => {
  const [language, setLanguage] = useState<Locale>("zh")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setLanguage(pathname.split("/")[1] as Locale)
  }, [pathname])

  // useEffect(() => {
  //   fetch("https://api.github.com/repos/{owner}/{repo}", {
  //     headers: {
  //       Authorization: "token {personal_access_token}",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //       const starCount = data.stargazers_count as number
  //       console.log(starCount)
  //       // 在页面上显示star数目
  //       // ...
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error)
  //     })
  // }, [])

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
            className="dropdown-content menu rounded-box menu-compact mt-3 w-36 p-2 shadow"
          >
            {text[language].navLinks.map((link) => {
              const isActive =
                link.href === `/${language}`
                  ? pathname === link.href
                  : pathname.startsWith(link.href)
              return (
                <li
                  key={link.name}
                  className="border-b bg-black  text-sm hover:bg-gray-900"
                >
                  <Link
                    className={
                      isActive
                        ? "bg-gradient-to-br from-[#8408ff] to-[#0089ff] bg-clip-text !text-transparent"
                        : ""
                    }
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="mr-0.5 sm:mr-3">
          <Image src="/fonts/logo.png" alt="" width={25} height={25} quality={100} />
        </div>
        <a
          className="btn-ghost btn text-base normal-case sm:text-xl"
          onClick={() => router.push("/")}
        >
          OpenIM
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex flex-row  px-1">
          {text[language].navLinks.map((link) => {
            const isActive =
              link.href === `/${language}`
                ? pathname === link.href
                : pathname.startsWith(link.href)
            return (
              <li key={link.name} className="px-2 text-sm">
                <Link
                  className={
                    isActive
                      ? "bg-gradient-to-br from-[#8408ff] to-[#0089ff] bg-clip-text !text-transparent"
                      : ""
                  }
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex-1 justify-end">
        <div className="hidden md:flex md:flex-row md:items-center md:pr-8">
          <Image
            width={16}
            height={16}
            src="/images/nav_github_icon.png"
            alt="github"
          />
          <span className="ml-2">11k</span>
        </div>
        <button className="hidden sm:btn-sm sm:btn sm:hover:btn-outline sm:bg-black sm:text-white">
          <Link href="https://doc.rentsoft.cn" className="text-xs font-normal">
            {text[language].docs}
          </Link>
        </button>
        <button className="hidden text-xs sm:btn-sm sm:btn sm:mx-3 sm:bg-[#006CFFFF] sm:hover:bg-[#006CFFFF]">
          <Link href="https://github.com/OpenIMSDK" className="text-xs font-normal">
            {text[language].start}
          </Link>
        </button>
        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="btn-sm btn m-1 flex flex-row bg-black text-white hover:btn-outline"
          >
            <p className="text-xs font-normal">{text[language].language}</p>
            <ChevronDownIcon className="h-4 w-4 text-white"></ChevronDownIcon>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded border border-[#2c2c2c] bg-black text-white shadow"
          >
            <li className="m-[2px] flex items-center text-sm hover:bg-[#2c2c2c]">
              <Link href="/zh">中文</Link>
            </li>
            <li className="m-[2px] flex items-center text-sm hover:bg-[#2c2c2c]">
              <Link href="/en">English</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar

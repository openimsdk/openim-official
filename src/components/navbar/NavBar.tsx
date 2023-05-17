"use client"

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"

const navLinks = [
  {
    name: "首页",
    href: "/",
  },
  {
    name: "体验Demo",
    href: "/demo",
  },
  {
    name: "开发者中心",
    href: "/developer",
  },
  {
    name: "定价",
    href: "/price",
  },
  {
    name: "社区",
    href: "/community",
  },
]

const NavBar = () => {
  const pathname = usePathname()
  const router = useRouter()

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
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === link.href
                  : pathname.startsWith(link.href)
              return (
                <li key={link.name}>
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
        <div className="mr-3">ICON</div>
        <a
          className="btn-ghost btn text-xl normal-case"
          onClick={() => router.push("/")}
        >
          OpenIM
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href)
            return (
              <li key={link.name}>
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
        <a className="btn">Get started</a>
      </div>
    </div>
  )
}

export default NavBar

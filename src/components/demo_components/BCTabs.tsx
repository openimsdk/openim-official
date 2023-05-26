"use client"

import { useState } from "react"
import Image from "next/image"

type demo = {
  label: string
  icon: string
  top_right_icon: string
  type?: "pc" | "mobile"
}

const demos: demo[] = [
  {
    label: "Flutter Android",
    icon: "/fonts/flutter_android.png",
    top_right_icon: "/fonts/qrcode.png",
    type: "mobile",
  },
  {
    label: "Flutter IOS",
    icon: "/fonts/flutter_ios.png",
    top_right_icon: "/fonts/qrcode.png",
    type: "mobile",
  },
  {
    label: "Native Android",
    icon: "/fonts/native_android.png",
    top_right_icon: "/fonts/qrcode.png",
    type: "mobile",
  },
  {
    label: "Native IOS",
    icon: "/fonts/native_ios.png",
    top_right_icon: "/fonts/qrcode.png",
    type: "mobile",
  },
  {
    label: "uni-app Android",
    icon: "/fonts/uniapp_android.png",
    top_right_icon: "/fonts/qrcode.png",
    type: "mobile",
  },
  {
    label: "Pc Web ToC",
    icon: "/fonts/pc_web_toc.png",
    top_right_icon: "",
  },
  {
    label: "Electron for Mac",
    icon: "/fonts/electron_for_mac.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
  },
  {
    label: "Electron for Windows",
    icon: "/fonts/electron_for_windows.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
  },
  {
    label: "Electron for Linux",
    icon: "/fonts/electron_for_linux.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
  },
  {
    label: "Electron for UOS",
    icon: "/fonts/electron_for_uos.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
  },
  {
    label: "Electron for Kylinos(银河麒麟)",
    icon: "/fonts/electron_for_kylinos.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
  },
]

const BCTabs = () => {
  const [active, setActive] = useState("C")

  const IconPicker = ({ demo }: { demo: demo }) => {
    if (typeof demo.type === undefined) {
      return <></>
    }
    let cls = ""
    let width = 0
    let height = 0
    if (demo.type === "pc") {
      cls = "absolute right-2 top-2"
      width = 10
      height = 10
    } else if (demo.type === "mobile") {
      cls = "absolute right-0 top-0"
      width = 35
      height = 35
    }
    return (
      <Image
        className={cls}
        src={demo.top_right_icon}
        alt=""
        width={width}
        height={height}
      ></Image>
    )
  }

  return (
    <div className="my-6 ">
      <div className="flex flex-row items-center justify-center">
        <button
          onClick={() => {
            setActive("C")
          }}
          className={
            active === "C" ? "mx-6 font-medium sm:mx-12  " : "mx-6 font-light sm:mx-12 "
          }
        >
          <p className="text-lg">TOC 版本</p>
          <div
            className={
              active === "C"
                ? "mx-auto w-8 border-b-2 border-sky-600 py-1"
                : "mx-auto w-8 py-1"
            }
          ></div>
        </button>
        <button
          onClick={() => {
            setActive("B")
          }}
          className={
            active === "B" ? "mx-6 font-medium  sm:mx-12 " : " mx-6 font-light sm:mx-12"
          }
        >
          <p className="text-lg">TOB 版本</p>
          <div
            className={
              active === "B"
                ? "mx-auto w-8 border-b-2 border-sky-600 py-1"
                : "mx-auto w-8 py-1"
            }
          ></div>
        </button>
      </div>
      <div className="mx-[-8vw] w-[100vw]  border-b border-b-gray-500 py-1"></div>
      <div className="flex flex-row flex-wrap items-center py-12 md:px-20">
        {demos.map((demo) => {
          return (
            <div key={demo.label} className="mx-4 my-6 flex flex-col md:mx-8">
              <div className="relative flex h-28 w-28 items-center justify-center rounded bg-[#1a1a1a] md:h-36 md:w-36 ">
                <Image src={demo.icon} alt={demo.label} width={50} height={50}></Image>
                <IconPicker demo={demo} />
              </div>
              <p className=" h-10 w-28 py-3 text-center text-white md:w-36">
                {demo.label}
              </p>
            </div>
          )
        })}
      </div>
      <div className="flex flex-row items-center md:px-20">
        <div className="mx-4 my-6 flex flex-col md:mx-8">
          <div className="relative flex h-28 w-28 items-center justify-center rounded bg-[#1a1a1a] md:h-36 md:w-36 ">
            <Image
              src="/fonts/manage.png"
              alt="management"
              width={50}
              height={50}
            ></Image>
          </div>
          <p className=" h-10 w-28 py-3 text-center text-white md:w-36">管理后台</p>
        </div>
        <div className="mb-5">
          <p>测试账号 ：admin1</p>
          <p className="py-2">密码 ：OpenlM888</p>
          <p className="text-sm">
            *防止部分人员进行恶意操作，当前预览版本限制了部分功能。如需体验完整版本，请联系OpenIM官方。
          </p>
        </div>
      </div>
    </div>
  )
}

export default BCTabs

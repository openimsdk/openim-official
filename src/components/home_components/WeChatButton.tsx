"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const WeChatButton = ({ params: { text } }: { params: { text: string } }) => {
  const [popState, setPopState] = useState<boolean>(false)
  const handleEnter = () => {
    setPopState(true)
  }
  const handleOut = () => {
    setPopState(false)
  }
  return (
    <div className="relative ml-3 h-8 w-40 md:h-12 md:w-44">
      <div className="btn_polygon_border h-8 w-40 bg-white md:h-12 md:w-44"></div>

      <Link
        onMouseOver={handleEnter}
        onMouseLeave={handleOut}
        href="https://github.com/OpenIMSDK/OpenIM-Docs/blob/main/docs/images/WechatIMG20.jpeg"
        className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-8 w-40 flex-row items-center justify-center text-sm md:h-12 md:w-44 md:text-base"
      >
        <Image
          width={16}
          height={16}
          src="/fonts/slack.png"
          alt="github"
          className="mr-2 md:mr-4"
        />
        <p>{text}</p>
      </Link>

      <Image
        src="/images/WechatIMG20.jpeg"
        alt=""
        width={200}
        height={200}
        style={{
          transition: "opacity 0.3s",
        }}
        className={
          popState
            ? "visible absolute -bottom-60 z-50 bg-amber-50 opacity-100"
            : "opacity-0"
        }
      ></Image>
    </div>
  )
}

export default WeChatButton

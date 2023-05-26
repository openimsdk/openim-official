"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TabsCard from "@/components/demopage/TabsCard";

export type demo = {
  label: string;
  icon: string;
  top_right_icon: string;
  download: string;
  hover: boolean;
  qrcode?: string;
  type?: "pc" | "mobile";
};

const demos_C: demo[] = [
  {
    label: "Flutter Android",
    icon: "/fonts/flutter_android.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/flutter_android_qrcode.png",
    hover: false,
    download:
      "https://cos.pgyer.com/d5c500f6e499f9d3d3c354e2de3edf27.apk?sign=17e07711d1052d4657dba31b2590936d&t=1685087777&response-content-disposition=attachment%3Bfilename%3DOpenIM_2.4.35.apk",
    type: "mobile",
  },
  {
    label: "Flutter IOS",
    icon: "/fonts/flutter_ios.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/flutter_ios_qrcode.png",
    hover: false,
    download: "https://testflight.apple.com/join/o956rTGx",
    type: "mobile",
  },
  {
    label: "Native Android",
    icon: "/fonts/native_android.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/native_android_qrcode.png",
    hover: false,
    download:
      "https://cos.pgyer.com/191d4cb17e4d2430281971c6e8eee6f9.apk?sign=82dd921e768546600150dbd68b1a8430&t=1685088525&response-content-disposition=attachment%3Bfilename%3DOpenIM_1.2.5.apk",
    type: "mobile",
  },
  {
    label: "Native IOS",
    icon: "/fonts/native_ios.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/native_ios_qrcode.png",
    hover: false,
    download: "https://testflight.apple.com/join/79cQqBYd",
    type: "mobile",
  },
  {
    label: "uni-app Android",
    icon: "/fonts/uniapp_android.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/uniapp_android_qrcode.png",
    hover: false,
    download:
      "https://cos.pgyer.com/f364b6e603111f0cb7f0361857c56983.apk?sign=e20fa05deaec51e3a93833e39c97be64&t=1685088695&response-content-disposition=attachment%3Bfilename%3DOpenIM-Uniapp_1.0.6.apk",
    type: "mobile",
  },
  {
    label: "Pc Web ToC",
    icon: "/fonts/pc_web_toc.png",
    top_right_icon: "",
    hover: false,
    download: "https://web.rentsoft.cn/",
  },
  {
    label: "Electron for Mac",
    icon: "/fonts/electron_for_mac.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download: "https://storage.rentsoft.cn/app/OpenIM-1.1.9-mac.zip",
  },
  {
    label: "Electron for Windows",
    icon: "/fonts/electron_for_windows.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download: "https://storage.rentsoft.cn/app/OpenIM%20Setup%201.1.9.exe",
  },
  {
    label: "Electron for Linux",
    icon: "/fonts/electron_for_linux.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download: "https://storage-online.rentsoft.cn/app/OpenIM_1.0.1_amd64.deb",
  },
  {
    label: "Electron for UOS",
    icon: "/fonts/electron_for_uos.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download: "https://storage-online.rentsoft.cn/app/OpenIM_1.0.1_arm64.deb",
  },
  {
    label: "Electron for Kylinos(银河麒麟)",
    icon: "/fonts/electron_for_kylinos.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download: "https://storage-online.rentsoft.cn/app/OpenIM_1.0.1_arm64_kylinos.deb",
  },
];
const demos_B: demo[] = [
  {
    label: "Pc Web ToB",
    icon: "/fonts/pc_web_toc.png",
    top_right_icon: "",
    hover: false,
    download: "https://web-tob.rentsoft.cn/",
  },
  {
    label: "Flutter Android",
    icon: "/fonts/flutter_android.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/flutter_android_qrcode_B.png",
    download: "https://www.pgyer.com/app/qrcode/OpenIM_B",
    hover: false,
    type: "mobile",
  },
  {
    label: "Native Android",
    icon: "/fonts/native_android.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/native_android_qrcode_B.png",
    hover: false,
    download:
      "https://cos.pgyer.com/35332b38ae1ad6e72471876a2bcc1a29.apk?sign=563464657a02bd8ca780377dfcee867f&t=1685090200&response-content-disposition=attachment%3Bfilename%3DOpenIM%28B%29_1.2.5.apk",
    type: "mobile",
  },
];

const BCTabs = () => {
  const [active, setActive] = useState("C");
  const [demos, setDemos] = useState(demos_C);

  return (
    <div className="my-6 ">
      <div className="flex flex-row items-center justify-center">
        <button
          onClick={() => {
            setActive("C");
            setDemos(demos_C);
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
            setActive("B");
            setDemos(demos_B);
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
      <div className="flex flex-row  flex-wrap items-center justify-center py-12 sm:justify-start md:px-20">
        {demos.map((demo) => {
          return <TabsCard key={demo.label} demo_item={demo} />;
        })}
      </div>
      <div className="flex flex-row items-center md:px-20">
        <div className="mx-4 my-6 flex flex-col md:mx-8">
          <div className="relative flex h-28 w-28 items-center justify-center rounded bg-[#1a2239] md:h-36 md:w-36 ">
            <Image
              src="/fonts/manage.png"
              alt="management"
              width={50}
              height={50}
            ></Image>
          </div>
          <Link
            target="_blank"
            href={`https://${active === "C" ? "admin" : "admin-tob"}.rentsoft.cn`}
            className=" link h-10 w-28 py-3 text-center text-white md:w-36"
          >
            管理后台
          </Link>
        </div>
        <div className="mb-5">
          <p>测试账号 ：admin1</p>
          <p className="py-2">密码 ：OpenIM888</p>
          <p className="text-sm">
            防止部分人员进行恶意操作，当前预览版本限制了部分功能。如需体验完整版本，请联系OpenIM官方。
          </p>
        </div>
      </div>
    </div>
  );
};

export default BCTabs;

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TabsCard from "@/components/demopage/TabsCard";

export type DemoSource = {
  label: string;
  subLabel?: string;
  demos: Demo[];
};

export type Demo = {
  label: string;
  icon: string;
  top_right_icon: string;
  download: string;
  hover: boolean;
  qrcode?: string;
  type?: "pc" | "mobile";
};

const toc_base_open: Demo[] = [
  {
    label: "Flutter Android",
    icon: "/fonts/flutter_android.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/flutter_android_qrcode.png",
    hover: false,
    download: "https://www.pgyer.com/OpenIM-Flutter",
    type: "mobile",
  },
  {
    label: "Flutter IOS",
    icon: "/fonts/flutter_ios.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/flutter_ios_qrcode.png",
    hover: false,
    download: "https://testflight.apple.com/join/UIWackuX",
    type: "mobile",
  },
  {
    label: "Native Android",
    icon: "/fonts/native_android.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/native_android_qrcode.png",
    hover: false,
    download: "https://www.pgyer.com/OpenIM-android",
    type: "mobile",
  },
  {
    label: "Native IOS",
    icon: "/fonts/native_ios.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/native_ios_qrcode.png",
    hover: false,
    download: "https://testflight.apple.com/join/hRrwpm38",
    type: "mobile",
  },
  {
    label: "uni-app Android",
    icon: "/fonts/uniapp_android.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/uniapp_android_qrcode.png",
    hover: false,
    download: "https://www.pgyer.com/OpenIM_Uniapp",
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
    download: "https://app-1302656840.cos.ap-nanjing.myqcloud.com/OpenIM-CB-1.0.0.dmg",
  },
  {
    label: "Electron for Mac M1",
    icon: "/fonts/electron_for_mac.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download:
      "https://app-1302656840.cos.ap-nanjing.myqcloud.com/OpenIM-CB-1.0.0-arm64.dmg",
  },
  {
    label: "Electron for Windows",
    icon: "/fonts/electron_for_windows.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download:
      "https://app-1302656840.cos.ap-nanjing.myqcloud.com/OpenIM-CB%20Setup%201.0.0.exe",
  },
  {
    label: "Electron for Ubuntu/UOS/Kylinos",
    icon: "/fonts/electron_for_linux.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download:
      "https://app-1302656840.cos.ap-nanjing.myqcloud.com/OpenIM-CB_1.0.0_amd64.deb",
  },
  {
    label: "Electron for Ubuntu/UOS/Kylinos arm64",
    icon: "/fonts/electron_for_linux.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download:
      "https://app-1302656840.cos.ap-nanjing.myqcloud.com/OpenIM-CB_1.0.0_arm64.deb",
  },
];
const toc_enterprise: Demo[] = [
  {
    label: "Flutter Android",
    icon: "/fonts/flutter_android.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/flutter_android_qrcode_c_e.png",
    hover: false,
    download: "https://www.pgyer.com/OpenIM-Flutter-Full",
    type: "mobile",
  },
  {
    label: "Flutter IOS",
    icon: "/fonts/flutter_ios.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/flutter_ios_qrcode_c_e.png",
    hover: false,
    download: "https://testflight.apple.com/join/Wl0C7dvP",
    type: "mobile",
  },
  {
    label: "Native Android",
    icon: "/fonts/native_android.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/native_android_qrcode_c_e.png",
    hover: false,
    download: "https://www.pgyer.com/OpenIM-Enterprise",
    type: "mobile",
  },
  {
    label: "Native IOS",
    icon: "/fonts/native_ios.png",
    top_right_icon: "/fonts/qrcode.png",
    qrcode: "/fonts/native_ios_qrcode_c_e.png",
    hover: false,
    download: "https://testflight.apple.com/join/cGuG9pVg",
    type: "mobile",
  },
  // {
  //   label: "uni-app Android",
  //   icon: "/fonts/uniapp_android.png",
  //   top_right_icon: "/fonts/qrcode.png",
  //   qrcode: "/fonts/uniapp_android_qrcode.png",
  //   hover: false,
  //   download: "https://www.pgyer.com/OpenIM_Uniapp",
  //   type: "mobile",
  // },
  {
    label: "Pc Web",
    icon: "/fonts/pc_web_toc.png",
    top_right_icon: "",
    hover: false,
    download: "https://web-enterprise.rentsoft.cn/",
  },
  {
    label: "Electron for Mac",
    icon: "/fonts/electron_for_mac.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download: "https://app-1302656840.cos.ap-nanjing.myqcloud.com/OpenIM-CER-1.0.0.dmg",
  },
  {
    label: "Electron for Mac M1",
    icon: "/fonts/electron_for_mac.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download:
      "https://app-1302656840.cos.ap-nanjing.myqcloud.com/OpenIM-CER-1.0.0-arm64.dmg",
  },
  {
    label: "Electron for Windows",
    icon: "/fonts/electron_for_windows.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download:
      "https://app-1302656840.cos.ap-nanjing.myqcloud.com/OpenIM-CER%20Setup%201.0.0.exe",
  },
  {
    label: "Electron for Ubuntu/UOS/Kylinos",
    icon: "/fonts/electron_for_linux.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download:
      "https://app-1302656840.cos.ap-nanjing.myqcloud.com/OpenIM-CER_1.0.0_amd64.deb",
  },
  {
    label: "Electron for Ubuntu/UOS/Kylinos arm64",
    icon: "/fonts/electron_for_linux.png",
    top_right_icon: "/fonts/download.png",
    type: "pc",
    hover: false,
    download:
      "https://app-1302656840.cos.ap-nanjing.myqcloud.com/OpenIM-CER_1.0.0_arm64.deb",
  },
];

const renderList: DemoSource[][] = [
  [
    {
      label: "基础版本",
      demos: toc_base_open,
    },
    {
      label: "高级版",
      subLabel: "（含音视频）",
      demos: toc_enterprise,
    },
  ],
];

const BCTabs = () => {
  const [active, setActive] = useState(0);

  const renderData = renderList[active];
  const isToc = active === 0;
  return (
    <div className="my-6 ">
      <div className="flex flex-row items-center justify-center">
        <button
          onClick={() => {
            setActive(0);
          }}
          className={
            isToc ? "mx-6 font-medium sm:mx-12  " : "mx-6 font-light sm:mx-12 "
          }
        >
          <p className="text-lg">TOC 版本</p>
          <div
            className={
              isToc ? "mx-auto w-8 border-b-2 border-sky-600 py-1" : "mx-auto w-8 py-1"
            }
          ></div>
        </button>
        {/* <button
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
        </button> */}
      </div>
      {renderData.map((data, idx) => (
        <div key={idx}>
          {!idx && <div className="border-b border-b-[#525868] py-1"></div>}
          <div className="flex flex-col border-b border-b-[#525868] md:flex-row">
            <div className="flex flex-col items-center pt-3 md:min-w-[180px] md:justify-center md:border-r md:border-r-[#525868]">
              <div>{data.label}</div>
              <div>{data.subLabel}</div>
            </div>
            <div className="flex flex-wrap items-center justify-center px-[8vw] py-12 md:justify-start md:pl-[2vw]">
              {data.demos.map((demo) => (
                <TabsCard key={demo.label} demo_item={demo} />
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col border-b border-b-[#525868] md:flex-row">
        <div className="md: flex items-center justify-center pt-3 md:min-w-[180px] md:border-r md:border-r-[#525868]">
          <div>管理后台</div>
        </div>
        <div className="flex flex-wrap items-center justify-center px-[8vw] py-12 md:pl-[4vw]">
          <div className="flex flex-col items-center">
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
              href={`https://${!active ? "admin" : "admin-tob"}.rentsoft.cn`}
              className=" link h-10 w-28 py-3 text-center text-white md:w-36"
            >
              管理后台
            </Link>
          </div>
          <div className="mt-6 flex flex-col items-center md:ml-8 md:mt-0 md:items-start">
            <div>
              <div className="mb-2">测试账号：admin1</div>
              <div>密码：admin1</div>
            </div>
            <div className="mt-3 text-sm">
              *防止部分人员进行恶意操作，当前预览版本限制了部分功能。如需体验完整版本，请联系OpenIM官方。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCTabs;

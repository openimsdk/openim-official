"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Demo } from "./BCTabs";

const TabsCard = ({ demo_item }: { demo_item: Demo }) => {
  const [demo, setDemo] = useState<Demo>(demo_item);

  const handleMouseEnter = () => {
    if (demo.hover === false) {
      setDemo({ ...demo, hover: true });
    }
  };

  const handleMouseOut = () => {
    setDemo({ ...demo, hover: false });
  };
  const IconPicker = ({ demo }: { demo: Demo }) => {
    if (typeof demo.type === undefined || demo.hover || !demo.top_right_icon) {
      return null;
    }
    let cls = "";
    let width = 0;
    let height = 0;
    if (demo.type === "pc") {
      cls = "absolute right-2 top-2";
      width = 10;
      height = 10;
    } else if (demo.type === "mobile") {
      cls = "absolute right-0 top-0";
      width = 35;
      height = 35;
    }
    return (
      <Image
        className={cls}
        src={demo.top_right_icon}
        alt=""
        width={width}
        height={height}
      ></Image>
    );
  };
  const DownloadText = ({ demo }: { demo: Demo }) => {
    if (demo.hover) {
      if (demo.type === "pc") {
        return (
          <Link
            target="_blank"
            href={demo.download}
            className=" h-10 w-28 py-3 text-center text-[#006CFFFF] md:w-36"
          >
            点击下载
          </Link>
        );
      } else if (demo.type === "mobile") {
        return (
          <Link
            target="_blank"
            href={demo.download}
            className=" h-10 w-28 py-3 text-center text-[#fff] md:w-36"
          >
            扫码或点击下载
          </Link>
        );
      }
      return (
        <Link
          target="_blank"
          href={demo.download}
          className=" h-10 w-28 py-3 text-center text-white md:w-36"
        >
          点击访问
        </Link>
      );
    }
    return (
      <p className=" h-10 w-28 py-3 text-center text-white md:w-36"> {demo.label}</p>
    );
  };

  const ImageShow = ({ demo }: { demo: Demo }) => {
    if (demo.hover) {
      if (demo.type === "pc") {
        return (
          <Image
            src={demo.top_right_icon}
            alt={demo.label}
            width={25}
            height={25}
          ></Image>
        );
      } else if (demo.type === "mobile" && demo.qrcode) {
        return (
          <Image src={demo.qrcode} alt={demo.label} width={150} height={150}></Image>
        );
      }
      return <Image src={demo.icon} alt={demo.label} width={50} height={50}></Image>;
    }
    return <Image src={demo.icon} alt={demo.label} width={50} height={50}></Image>;
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
      className="mx-4 my-6 flex flex-col  md:mx-8"
    >
      <div className=" relative flex h-28 w-28 items-center justify-center rounded bg-[#1a2239] md:h-36 md:w-36 ">
        <ImageShow demo={demo} />
        <IconPicker demo={demo} />
      </div>
      <DownloadText demo={demo} />
    </div>
  );
};

export default TabsCard;

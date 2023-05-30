import { Dictionary } from "@/dictionaries/en";
import React from "react";
import SourceRow from "./SourceRow";

const demoSources = [
  {
    name: "openim-flutter-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-Flutter-Demo",
    color: "text-teal-500",
    border_color: "border-teal-500",
    hover_bg: "hover:bg-teal-500",
  },
  {
    name: "openim-android-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-Android-Demo",
    color: "text-fuchsia-500",
    border_color: "border-fuchsia-500",
    hover_bg: "hover:bg-fuchsia-500",
  },
  {
    name: "openim-ios-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-iOS-Demo",
    color: "text-indigo-500",
    border_color: "border-indigo-500",
    hover_bg: "hover:bg-indigo-500",
  },
  {
    name: "openim-pc-web-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-PC-Web-Demo",
    color: "text-rose-500",
    border_color: "border-rose-500",
    hover_bg: "hover:bg-rose-500",
  },
  {
    name: "openim-uniapp-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-Uniapp-Demo",
    color: "text-amber-500",
    border_color: "border-amber-500",
    hover_bg: "hover:bg-amber-500",
  },
  {
    name: "openim-flutter-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-Flutter-Demo",
    color: "text-teal-500",
    border_color: "border-teal-500",
    hover_bg: "hover:bg-teal-500",
  },
  {
    name: "openim-android-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-Android-Demo",
    color: "text-fuchsia-500",
    border_color: "border-fuchsia-500",
    hover_bg: "hover:bg-fuchsia-500",
  },
  {
    name: "openim-ios-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-iOS-Demo",
    color: "text-indigo-500",
    border_color: "border-indigo-500",
    hover_bg: "hover:bg-indigo-500",
  },
  {
    name: "openim-pc-web-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-PC-Web-Demo",
    color: "text-rose-500",
    border_color: "border-rose-500",
    hover_bg: "hover:bg-rose-500",
  },
  {
    name: "openim-uniapp-demo",
    href: "https://github.com/OpenIMSDK/Open-IM-Uniapp-Demo",
    color: "text-amber-500",
    border_color: "border-amber-500",
    hover_bg: "hover:bg-amber-500",
  },
];
const sdkSources = [
  {
    name: "openim-sdk-core",
    href: "https://github.com/OpenIMSDK/openim-sdk-core",
    color: "text-teal-500",
    border_color: "border-teal-500",
    hover_bg: "hover:bg-teal-500",
  },
  {
    name: "openim-sdk-ios",
    href: "https://github.com/OpenIMSDK/Open-IM-SDK-iOS",
    color: "text-fuchsia-500",
    border_color: "border-fuchsia-500",
    hover_bg: "hover:bg-fuchsia-500",
  },
  {
    name: "openim-sdk-web-wasm",
    href: "https://github.com/OpenIMSDK/Open-IM-SDK-Web-Wasm",
    color: "text-indigo-500",
    border_color: "border-indigo-500",
    hover_bg: "hover:bg-indigo-500",
  },
  {
    name: "openim-sdk-flutter",
    href: "https://github.com/OpenIMSDK/Open-IM-SDK-Flutter",
    color: "text-rose-500",
    border_color: "border-rose-500",
    hover_bg: "hover:bg-rose-500",
  },
  {
    name: "openim-sdk-android",
    href: "https://github.com/OpenIMSDK/Open-IM-SDK-Android ",
    color: "text-amber-500",
    border_color: "border-amber-500",
    hover_bg: "hover:bg-amber-500",
  },
  {
    name: "openim-sdk-uniapp",
    href: "https://github.com/OpenIMSDK/Open-IM-SDK-Uniapp",
    color: "text-teal-500",
    border_color: "border-teal-500",
    hover_bg: "hover:bg-teal-500",
  },
  {
    name: "openim-sdk-rn",
    href: "https://github.com/OpenIMSDK/Open-IM-SDK-ReactNative",
    color: "text-fuchsia-500",
    border_color: "border-fuchsia-500",
    hover_bg: "hover:bg-fuchsia-500",
  },
  {
    name: "openim-sdk-web-wasm",
    href: "https://github.com/OpenIMSDK/Open-IM-SDK-Web-Wasm",
    color: "text-indigo-500",
    border_color: "border-indigo-500",
    hover_bg: "hover:bg-indigo-500",
  },
  {
    name: "openim-sdk-flutter",
    href: "https://github.com/OpenIMSDK/Open-IM-SDK-Flutter",
    color: "text-rose-500",
    border_color: "border-rose-500",
    hover_bg: "hover:bg-rose-500",
  },
  {
    name: "openim-sdk-android",
    href: "https://github.com/OpenIMSDK/Open-IM-SDK-Android ",
    color: "text-amber-500",
    border_color: "border-amber-500",
    hover_bg: "hover:bg-amber-500",
  },
];

export type SourceItem = (typeof demoSources)[0];

const SourcesSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div className="my-24 flex flex-col items-center">
      <div className="py-5">
        <span className="text-3xl sm:text-4xl">
          {dictionary["home"].part8.title_pre}
        </span>
        <span className="text-3xl text-[#006CFFFF] sm:text-4xl">
          {dictionary["home"].part8.title}
        </span>
      </div>
      <p className="mx-[8vw] text-sm sm:px-0 sm:text-base">
        {dictionary["home"].part8.desc1}
      </p>
      <p className="mx-[8vw] pt-8 text-sm opacity-50 sm:pt-16 sm:text-base">
        {dictionary["home"].part8.desc2}
      </p>
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent,black 20%, black 70%,transparent)",
        }}
        className="mx-[8vw] mt-4 w-full overflow-hidden"
      >
        <SourceRow sources={demoSources} />
        <SourceRow sources={sdkSources} />
        <SourceRow sources={demoSources} />
        <SourceRow sources={sdkSources} />
      </div>
    </div>
  );
};

export default SourcesSection;

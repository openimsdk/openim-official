"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TabsCard from "@/components/demopage/TabsCard";
import { toc_base_open, toc_enterprise } from "./tocData";
import { tob_base_open, tob_enterprise } from "./tobData";
import { Locale } from "@/i18n-config";
import { Dictionary } from "@/dictionaries/en";

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
  only_cn?: boolean;
};

const renderList: DemoSource[][] = [
  [
    {
      label: "高级版",
      subLabel: "（含音视频）",
      demos: toc_enterprise,
    },
    // {
    //   label: "基础版本",
    //   demos: toc_base_open,
    // },
  ],
  [
    {
      label: "高级版",
      subLabel: "（含音视频）",
      demos: tob_enterprise,
    },
    // {
    //   label: "基础版本",
    //   demos: tob_base_open,
    // },
  ],
];

const BCTabs = ({ lang, dictionary }: { lang: Locale; dictionary: Dictionary }) => {
  const [active, setActive] = useState(0);

  const renderData = renderList[active];
  const isToc = active === 0;
  const isCn = lang === "zh";

  return (
    <div className="my-6 ">
      <div className="flex flex-row items-center justify-center">
        <button
          onClick={() => setActive(0)}
          className={
            isToc ? "mx-6 font-medium sm:mx-12  " : "mx-6 font-light sm:mx-12 "
          }
        >
          <p className="text-lg">{dictionary.commercial.part2.c_version}</p>
          <div
            className={
              isToc ? "mx-auto w-8 border-b-2 border-sky-600 py-1" : "mx-auto w-8 py-1"
            }
          ></div>
        </button>
        <button
          onClick={() => setActive(1)}
          className={
            active === 1 ? "mx-6 font-medium sm:mx-12 " : " mx-6 font-light sm:mx-12"
          }
        >
          <p className="text-lg">{dictionary.commercial.part2.b_version}</p>
          <div
            className={
              active === 1
                ? "mx-auto w-8 border-b-2 border-sky-600 py-1"
                : "mx-auto w-8 py-1"
            }
          ></div>
        </button>
      </div>
      {renderData.map((data, idx) => (
        <div key={idx}>
          {!idx && <div className="border-b border-b-[#525868] py-1"></div>}
          <div className="flex flex-col border-b border-b-[#525868] md:flex-row">
            <div className="flex flex-col items-center pt-3 md:min-w-[180px] md:justify-center md:border-r md:border-r-[#525868]">
              <div>{dictionary.commercial.part2.title}</div>
              <div>{dictionary.commercial.part2.sub_title}</div>
            </div>

            <div className="px-[8vw] py-12 md:justify-start md:pl-[2vw]">
              {active === 1 && (
                <div className="mb-3 flex flex-col items-center">
                  <div>
                    <div>{dictionary.commercial.part2.b_desc}</div>
                    <div>{dictionary.commercial.part2.b_account}</div>
                    <div>{dictionary.commercial.part2.b_password}</div>
                  </div>
                </div>
              )}
              <div className="flex flex-wrap items-center justify-center ">
                {data.demos.map((demo) =>
                  demo.only_cn && !isCn ? null : (
                    <TabsCard
                      key={demo.label}
                      demo_item={demo}
                      dictionary={dictionary}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BCTabs;

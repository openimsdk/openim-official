import React from "react";
import Image from "next/image";
import { Dictionary } from "@/dictionaries/en";

const AdvantagesSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div className="relative md:pb-12 md:pt-28">
      <Image
        className="absolute -left-10 -top-32"
        src="/images/honeycomb.png"
        alt=""
        width={200}
        height={200}
      />
      <div className="mx-[8vw] mb-32 text-center">
        <div>
          <span className="text-4xl">{dictionary["home"].part7.title_pre}</span>
          <span className="text-4xl text-[#006CFFFF]">
            {dictionary["home"].part7.title}
          </span>
        </div>
        <div className="mt-5 text-xl">{dictionary["home"].part7.sub_title}</div>
      </div>
      <div className="mx-[8vw] md:flex md:flex-row md:justify-between">
        <div className="md:flex-1">
          <ul>
            <li className="mb-8 flex flex-row ">
              <span className="pr-4 pt-4 opacity-50">01</span>
              <div>
                <p className="text-2xl sm:text-2xl">
                  {dictionary["home"].part7.t1.title}
                </p>
                <p className="py-5 text-sm opacity-50 sm:text-base">
                  {dictionary["home"].part7.t1.desc}
                </p>
                <div className="border-b pb-2 opacity-20"></div>
              </div>
            </li>
            <li className="mb-8 flex flex-row ">
              <span className="pr-4 pt-4 opacity-50">02</span>
              <div>
                <p className="text-2xl sm:text-2xl">
                  {dictionary["home"].part7.t2.title}
                </p>
                <p className="py-5 text-sm opacity-50 sm:text-base">
                  {dictionary["home"].part7.t2.desc}
                </p>
                <div className="border-b pb-2 opacity-20"></div>
              </div>
            </li>
            <li className="mb-8 flex flex-row">
              <span className="pr-4 pt-4 opacity-50">03</span>
              <div>
                <p className="text-2xl sm:text-2xl">
                  {dictionary["home"].part7.t3.title}
                </p>
                <p className="py-5 text-sm opacity-50 sm:text-base">
                  {dictionary["home"].part7.t3.desc}
                </p>
                <div className="border-b pb-2 opacity-20"></div>
              </div>
            </li>
            <li className="mb-8 flex flex-row ">
              <span className="pr-4 pt-4 opacity-50">04</span>
              <div>
                <p className="text-2xl sm:text-2xl">
                  {dictionary["home"].part7.t4.title}
                </p>
                <p className="py-5 text-sm opacity-50 sm:text-base">
                  {dictionary["home"].part7.t4.desc}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-3 md:flex md:flex-1 md:flex-col md:justify-center md:py-0">
          <Image
            src="/images/advantages_bg.png"
            alt="advantages_bg"
            width={2166}
            height={1114}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;

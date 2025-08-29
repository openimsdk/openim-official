import React from "react";
import Image from "next/image";
import { Dictionary } from "@/dictionaries/en";

const FeatureSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <>
      <div className="mx-[8vw] mt-20 md:mt-48 md:flex md:h-96 md:flex-row md:justify-between ">
        <div className="md:relative md:order-2 md:w-7/12">
          <Image
            className=" right-0 top-0 md:absolute"
            src={dictionary.home.part3.img}
            alt=""
            width={640}
            height={536}
            quality={75}
          />
        </div>
        <div className="pt-16 md:order-1 md:w-5/12 lg:pt-28">
          <div>
            <span className="text-xl  lg:text-2xl">
              {dictionary["home"].part3.title_pre}
            </span>
            <span className="text-xl text-[#006CFFFF]  lg:text-2xl">
              {dictionary["home"].part3.title}
            </span>
          </div>
          <p className="py-4 text-xs leading-loose sm:py-10 sm:text-lg md:pr-20">
            {dictionary["home"].part3.desc}
          </p>
        </div>
      </div>
      <div className="relative mx-[8vw] mt-20 md:mt-56 md:flex md:h-96 md:flex-row md:justify-between ">
        <Image
          className="absolute -bottom-16 left-0 hidden sm:-bottom-32 sm:block"
          src="/images/arrowdown.png"
          alt=""
          width={20}
          height={30}
        />
        <div className=" md:relative md:order-2 md:w-7/12">
          <Image
            className=" right-0 top-0 md:absolute"
            src={dictionary.home.part4.img}
            alt=""
            width={640}
            height={536}
            quality={75}
          />
        </div>
        <div className=" pt-16 md:order-1 md:w-5/12 lg:pt-28">
          <div>
            <span className="text-xl  lg:text-2xl">
              {dictionary["home"].part4.title_pre}
            </span>
            <span className="text-xl text-[#006CFFFF]  lg:text-2xl">
              {dictionary["home"].part4.title}
            </span>
          </div>
          <p className="py-4 text-xs leading-loose sm:py-10 sm:text-lg md:pr-20">
            {dictionary["home"].part4.desc}
          </p>
        </div>
      </div>
      <div className="relative mt-20 md:mt-56 md:flex md:h-96 md:flex-row md:justify-between ">
        <Image
          className="absolute -right-5 -top-10 rotate-180 transform"
          src="/images/honeycomb.png"
          alt=""
          width={250}
          height={200}
        />
        <div className=" relative md:order-2 md:w-7/12">
          <Image
            className="right-0 top-0 z-40 mr-[8vw] md:absolute"
            src={dictionary.home.part5.img}
            alt=""
            width={550}
            height={436}
            quality={75}
          />
          <Image
            className="absolute  bottom-0 right-0 md:bottom-auto md:mt-32 "
            src="/images/circle.png"
            alt=""
            width={680}
            height={400}
          />
          <Image
            className="absolute right-0 mr-[8vw] hidden sm:block md:-bottom-60 "
            src="/images/arrowdown.png"
            alt=""
            width={20}
            height={30}
          />
        </div>
        <div className="mx-[8vw] pt-16 md:order-1 md:w-5/12 lg:pt-28">
          <div>
            <span className="text-xl  lg:text-2xl">
              {dictionary["home"].part5.title_pre}
            </span>
            <span className="text-xl text-[#006CFFFF]  lg:text-2xl">
              {dictionary["home"].part5.title}
            </span>
          </div>
          <p className="py-4 text-xs leading-loose sm:py-10 sm:text-lg md:pr-20">
            {dictionary["home"].part5.desc}
          </p>
        </div>
      </div>
      <div className="mx-[8vw] my-20 md:my-80 md:flex md:h-96 md:flex-row md:justify-between ">
        <div className=" md:relative md:order-2 md:w-7/12">
          <Image
            className=" right-0 top-0 md:absolute"
            src={dictionary.home.part6.img}
            alt=""
            width={640}
            height={536}
            quality={75}
          />
        </div>
        <div className=" pt-16 md:order-1 md:w-5/12 lg:pt-28">
          <div>
            <span className="text-xl  lg:text-2xl">
              {dictionary["home"].part6.title_pre}
            </span>
            <span className="text-xl text-[#006CFFFF]  lg:text-2xl">
              {dictionary["home"].part6.title}
            </span>
          </div>
          <p className="py-4 text-xs leading-loose sm:py-10 sm:text-lg md:pr-20">
            {dictionary["home"].part6.desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;

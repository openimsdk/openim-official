import Image from "next/image"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { getDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import Link from "next/link"
import DemoShow from "@/components/home_components/DemoShow"

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="overflow-x-hidden">
      <div className="mx-[8vw] my-20 sm:my-36 md:flex md:flex-row md:justify-between">
        <div className="w-full sm:pr-2 md:w-1/2 md:pr-5  xl:pr-20">
          <p className="bg-gradient-to-b from-[#006CFFFF] to-[#0062FFFF] bg-clip-text  text-xl font-semibold  text-transparent sm:text-2xl  lg:text-3xl xl:text-4xl">
            OpenIM
          </p>
          <p className="py-5 text-sm sm:text-lg lg:text-2xl">
            {dictionary["home"].part1.en}
          </p>
          <p className="pb-5 text-sm sm:text-lg lg:text-2xl">
            {dictionary["home"].part1.text}
          </p>
          <p className="text-xs sm:text-sm md:text-base">
            {dictionary["home"].part1.desc}
          </p>
          <div className="mb-6 mt-10 flex flex-row md:mt-24">
            <Link
              className="btn_polygon flex  h-8 w-32 flex-row items-center justify-center bg-[#006CFFFF] md:h-12 md:w-44 md:flex-shrink-0"
              href="https://github.com/OpenIMSDK"
            >
              <p>{dictionary["home"].part1.btn_begin}</p>
            </Link>

            <div className="relative ml-5 h-8 w-32 md:h-12 md:w-44">
              <div className="btn_polygon_border h-8 w-32 bg-white md:h-12 md:w-44"></div>

              <Link
                className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-8 w-32 flex-row items-center justify-center md:h-12 md:w-44"
                href="https://doc.rentsoft.cn/"
              >
                <p>{dictionary["home"].part1.btn_docs}</p>
                <ChevronRightIcon className="h-6 w-8 pl-2 text-[#006CFFFF]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full sm:pl-2 md:w-1/2 md:pl-5 xl:pl-20">
          <Image
            width={554}
            height={400}
            src="/images/code.png"
            quality={100}
            alt="code"
          />
        </div>
      </div>
      <div className="relative ">
        <div className="flex flex-row justify-center">
          <span className="pr-1 text-xs font-semibold sm:text-2xl  md:pr-2 lg:text-3xl xl:text-4xl ">
            {dictionary["home"].part2.title_pre}
          </span>
          <span className="text-xs font-semibold  text-[#006CFFFF] sm:text-2xl lg:text-3xl xl:text-4xl">
            {dictionary["home"].part2.title}
          </span>
        </div>
        <p className="mx-[8vw] py-5 text-center text-xs sm:text-base lg:text-xl">
          {dictionary["home"].part2.desc}
        </p>
        <div className="mx-[8vw] flex flex-row justify-center py-4">
          <div className="relative ml-5 h-8 w-40 md:h-12 md:w-44">
            <div className="btn_polygon_border h-8 w-40 bg-white md:h-12 md:w-44"></div>
            <Link
              href="https://github.com/OpenIMSDK"
              className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-8 w-40 flex-row items-center justify-center text-sm md:h-12 md:w-44 md:text-base"
            >
              <Image
                width={16}
                height={16}
                src="/fonts/github.png"
                alt="github"
                className="mr-3 md:mr-6"
              />
              <p>{dictionary["home"].part2.github}</p>
            </Link>
          </div>
          <div className="relative ml-3 h-8 w-40 md:h-12 md:w-44">
            <div className="btn_polygon_border h-8 w-40 bg-white md:h-12 md:w-44"></div>
            <Link
              href="https://join.slack.com/t/openimsdk/shared_invite/zt-1tmoj26uf-_FDy3dowVHBiGvLk9e5Xkg"
              className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-8 w-40 flex-row items-center justify-center text-sm md:h-12 md:w-44 md:text-base"
            >
              <Image
                width={16}
                height={16}
                src="/fonts/slack.png"
                alt="github"
                className="mr-2 md:mr-4"
              />
              <p>{dictionary["home"].part2.join}</p>
            </Link>
          </div>
        </div>

        <div className="mx-[8vw] flex flex-row justify-center py-10 sm:py-20">
          <div>
            <p className="pb-4 text-3xl font-thin sm:text-4xl">11K</p>
            <p className="text-xs font-thin">GITHUB STARS</p>
          </div>
          <div className="px-6 sm:px-20">
            <p className="pb-4 text-3xl font-thin sm:text-4xl">0.1K</p>
            <p className="text-xs font-thin">Slack MEMBERS</p>
          </div>
          <div>
            <p className="pb-4 text-3xl font-thin sm:text-4xl">2.0K</p>
            <p className="text-xs font-thin">PROJECTS</p>
          </div>
        </div>
        <div
          className="absolute mx-[8vw]"
          style={{
            left: `${-10}vw`,
            bottom: `${-10}vw`,
          }}
        >
          <Image src="/images/honeycomb.png" alt="" width={200} height={200} />
        </div>

        <Image
          className="absolute -bottom-16 right-0 sm:-bottom-32"
          src="/images/arrowdown.png"
          alt=""
          width={20}
          height={30}
        />
      </div>
      <div className="mx-[8vw] mt-20 md:mt-56 md:flex md:h-96 md:flex-row md:justify-between ">
        <div className="md:relative md:order-2 md:w-7/12">
          <Image
            className=" right-0 top-0 md:absolute"
            src={dictionary.home.part3.img}
            alt=""
            width={640}
            height={536}
            quality={100}
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
            quality={100}
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
            quality={100}
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
            quality={100}
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
      <div className="relative md:flex md:flex-row md:justify-between md:pb-12 md:pt-28">
        <Image
          className="absolute -left-10 -top-32"
          src="/images/honeycomb.png"
          alt=""
          width={200}
          height={200}
        />
        <div className="mx-[8vw] pb-16 md:ml-[8vw] md:mr-0 md:flex-1 md:py-0">
          <span className="text-4xl">{dictionary["home"].part7.title_pre}</span>
          <span className="text-4xl text-[#006CFFFF]">
            {dictionary["home"].part7.title}
          </span>
        </div>
        <div className="mx-[8vw] md:ml-0 md:mr-[8vw] md:flex-1">
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
      </div>
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
        <DemoShow />
      </div>
      <div className="mx-[8vw] flex flex-col items-center py-28 sm:py-40">
        <div>
          <span className="text-xl text-[#006CFFFF] sm:text-2xl md:text-3xl ">
            {dictionary["home"].part9.title_pre}
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl">
            {dictionary["home"].part9.title}
          </span>
        </div>
        <p className=" pt-4 text-xs sm:text-lg">{dictionary["home"].part9.desc}</p>
        <div className="mb-6 mt-10 flex flex-row md:mt-24">
          <Link
            className="btn_polygon flex h-8 w-32 flex-row  items-center justify-center bg-[#006CFFFF] md:h-12 md:w-44 md:flex-shrink-0"
            href="https://github.com/OpenIMSDK"
          >
            <p>{dictionary["home"].part9.btn_begin}</p>
          </Link>

          <div className="relative ml-5 h-8 w-32 md:h-12 md:w-44">
            <div className="btn_polygon_border h-8 w-32 bg-white md:h-12 md:w-44"></div>

            <Link
              className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-8 w-32 flex-row items-center justify-center md:h-12 md:w-44"
              href="https://doc.rentsoft.cn"
            >
              <p>{dictionary["home"].part9.btn_docs}</p>
              <ChevronRightIcon className="h-6 w-6 text-[#006CFFFF] sm:pl-2" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

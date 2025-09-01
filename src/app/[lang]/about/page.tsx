import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Image from "next/image";

const About = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);

  return (
    <div className="relative overflow-x-hidden">
      <Image
        className="absolute -left-6 top-2"
        src="/images/honeycomb.png"
        width={250}
        height={150}
        alt=""
      />
      <div className="mx-[8vw] my-6">
        <div className="py-12">
          <span className="text-4xl font-bold text-white">
            {dictionary.about.title_pre}
          </span>
          <span className="text-4xl font-bold text-[#006CFFFF]">
            {dictionary.about.title}
          </span>
        </div>
        <ul className="relative pb-12">
          <li className="max-w-3xl">
            <p className="text-sm sm:text-base">{dictionary.about.part1}</p>
          </li>
          <li className="max-w-3xl py-8">
            <p className="py-4 text-lg font-extrabold">{dictionary.about.title2}</p>
            <p className="text-sm sm:text-base">{dictionary.about.part2}</p>
          </li>
          <li className="max-w-3xl">
            <p className="py-4 text-lg font-extrabold">{dictionary.about.title3}</p>
            <p className="text-sm sm:text-base">{dictionary.about.part3}</p>
          </li>
          <Image
            className="absolute hidden lg:-right-40 lg:top-10 lg:block"
            src="/images/hero.png"
            alt=""
            width={720}
            height={540}
          />
        </ul>
      </div>
    </div>
  );
};

export default About;

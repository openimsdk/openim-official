import FreeSection from "@/components/preicepage/FreeSection";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import PaidSection from "@/components/preicepage/PaidSection";

const Price = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);
  return (
    <div className="mx-[8vw]">
      <div className="py-16 text-center">
        <div>
          <span className="text-3xl text-white">{dictionary.price.title_pre}</span>
          <span className="text-3xl text-[#006CFFFF]">{dictionary.price.title}</span>
        </div>
        <p className="py-5 text-sm">{dictionary.price.desc}</p>
      </div>
      <FreeSection dictionary={dictionary} />
      <PaidSection dictionary={dictionary} />
    </div>
  );
};

export default Price;

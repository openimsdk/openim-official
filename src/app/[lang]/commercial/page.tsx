import BCTabs from "@/components/demopage/BCTabs";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Demo({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="overflow-x-hidden">
      <div>
        <div className="mx-[8vw] py-14">
          <div className="py-4 text-center">
            <span className="text-3xl">{dictionary.commercial.part1.title_pre}</span>
            <span className="text-3xl text-[#006CFFFF]">
              {dictionary.commercial.part1.title}
            </span>
          </div>
          <p className="text-center text-sm">{dictionary.commercial.part1.desc}</p>
        </div>
        <BCTabs lang={lang} dictionary={dictionary} />
      </div>
    </main>
  );
}

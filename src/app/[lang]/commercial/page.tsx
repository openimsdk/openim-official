import BCTabs from "@/components/demopage/BCTabs";
import VersionPlan from "@/components/demopage/VersionPlan";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Demo({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="mx-[15%] flex flex-1 items-center justify-center overflow-x-hidden">
      <VersionPlan dictionary={dictionary} />
    </main>
  );
}

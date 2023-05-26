import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import CodeStartSection from "@/components/homepage/CodeStartSection";
import CommunitySection from "@/components/homepage/CommunitySection";
import FeatureSection from "@/components/homepage/FeatureSection";
import AdvantagesSection from "@/components/homepage/AdvantagesSection";
import SourcesSection from "@/components/homepage/SourcesSection";
import BottomStartSection from "@/components/homepage/BottomStartSection";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="overflow-x-hidden">
      <CodeStartSection dictionary={dictionary} />

      <CommunitySection dictionary={dictionary} />

      <FeatureSection dictionary={dictionary} />

      <AdvantagesSection dictionary={dictionary} />

      <SourcesSection dictionary={dictionary} />

      <BottomStartSection dictionary={dictionary} />
    </main>
  );
}

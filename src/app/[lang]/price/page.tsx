import FreeSection from "@/components/preicepage/FreeSection"
import { getDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"

const Price = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang)
  return (
    <div className="mx-[8vw]">
      <div className="py-16 text-center">
        <div>
          <span className="text-3xl text-white">选择合适的</span>
          <span className="text-3xl text-[#006CFFFF]">IM模块</span>
        </div>
        <p className="py-5 text-sm">分模块付费，灵活搭配购买</p>
      </div>
      <FreeSection dictionary={dictionary} />
    </div>
  )
}

export default Price

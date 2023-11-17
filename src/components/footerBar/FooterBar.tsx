"use client";

import { Locale } from "@/i18n-config";
import { usePathname } from "next/navigation";
import Link from "next/link";

const text = {
  zh: {
    product: {
      title: "产品",
      demo: "商用版本",
    },

    developer: {
      title: "开发者",
      document: "文档",
      github: "GitHub",
    },

    company: {
      title: "公司",
      about: "关于",
    },

    contact: {
      title: "联系我们",
      wechat: "商业微信",
    },
  },
  en: {
    product: {
      title: "Product",
      demo: "Commercial experience demo",
    },

    developer: {
      title: "Developers",
      document: "Documentation",
      github: "GitHub",
    },

    company: {
      title: "Company",
      about: "About",
    },

    contact: {
      title: "Contact Us",
      wechat: "Wechat",
    },
  },
};

const FooterBar = () => {
  const pathname = usePathname();
  const language = pathname.split("/")[1] as Locale;

  const isZh = language === "zh";

  return (
    <div>
      <footer className="footer grid grid-cols-2 gap-x-4 gap-y-8 px-[8vw] py-10 text-neutral-content md:flex md:justify-between">
        {isZh && (
          <div>
            <span className="footer-title">{text[language].product.title}</span>
            <Link className="link-hover link" href={`/${language}/commercial`}>
              {text[language].product.demo}
            </Link>
          </div>
        )}
        <div>
          <span className="footer-title">{text[language].developer.title}</span>
          <Link href="https://docs.openim.io" className="link-hover link">
            {text[language].developer.document}
          </Link>
          <Link href="https://github.com/OpenIMSDK" className="link-hover link">
            {text[language].developer.github}
          </Link>
        </div>
        {
          <div>
            <span className="footer-title">{text[language].company.title}</span>
            <Link href={`/${language}/about`} className="link-hover link">
              {text[language].company.about}
            </Link>
          </div>
        }
        <div>
          <span className="footer-title">{text[language].contact.title}</span>
          <Link href="mailto:contact@openim.io" className="link-hover link">
            contact@openim.io
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default FooterBar;

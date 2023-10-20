"use client";

import { Locale } from "@/i18n-config";
import { usePathname } from "next/navigation";
import Link from "next/link";

const text = {
  zh: {
    product: {
      title: "产品",
      sdk: "开源SDK",
      demo: "商用体验demo",
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
      sdk: "Open source SDK",
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
        <div>
          <span className="footer-title">{text[language].product.title}</span>
          <Link
            href="https://github.com/OpenIMSDK/openim-sdk-core"
            target="_blank"
            className="link-hover link"
          >
            {text[language].product.sdk}
          </Link>
          <Link
            className="link-hover link"
            target={isZh ? undefined : "_blank"}
            href={
              !isZh
                ? "https://github.com/orgs/OpenIMSDK/repositories?q=Demo&type=all&language=&sort="
                : `/${language}/demo`
            }
          >
            {text[language].product.demo}
          </Link>
        </div>
        <div>
          <span className="footer-title">{text[language].developer.title}</span>
          <Link href="https://docs.openim.io" className="link-hover link">
            {text[language].developer.document}
          </Link>
          <Link href="https://github.com/OpenIMSDK" className="link-hover link">
            {text[language].developer.github}
          </Link>
        </div>
        {isZh && (
          <div>
            <span className="footer-title">{text[language].company.title}</span>
            <Link href={`/${language}/about`} className="link-hover link">
              {text[language].company.about}
            </Link>
          </div>
        )}
        <div>
          <span className="footer-title">{text[language].contact.title}</span>
          {isZh && (
            <>
              <p>{text[language].contact.wechat}</p>
              <p>OpenIM-RTC</p>
            </>
          )}

          {!isZh && (
            <Link
              href="https://join.slack.com/t/openimsdk/shared_invite/zt-1tmoj26uf-_FDy3dowVHBiGvLk9e5Xkg"
              className="link-hover link"
            >
              Slack
            </Link>
          )}
        </div>
      </footer>
      <div className="footer-center pb-6 pt-12">
        {isZh && (
          <a
            className="link-hover link text-sm text-[#006CFFFF]"
            href="https://beian.miit.gov.cn/"
            target="_blank"
          >
            蜀ICP备2021015500号
          </a>
        )}
      </div>
    </div>
  );
};

export default FooterBar;

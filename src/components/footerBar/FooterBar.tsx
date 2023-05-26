"use client";

import Image from "next/image";
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
      github: "github",
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
      github: "Github",
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

  return (
    <div>
      <footer className="footer grid grid-cols-2 gap-x-4 gap-y-8 px-[8vw] py-10 text-neutral-content md:flex md:justify-between">
        <div>
          <span className="footer-title">{text[language].product.title}</span>
          <Link
            href="https://github.com/OpenIMSDK/openim-sdk-core"
            className="link-hover link"
          >
            {text[language].product.sdk}
          </Link>
          <a className="link-hover link">{text[language].product.demo}</a>
        </div>
        <div>
          <span className="footer-title">{text[language].developer.title}</span>
          <Link href="https://doc.rentsoft.cn/#/" className="link-hover link">
            {text[language].developer.document}
          </Link>
          <Link href="https://github.com/OpenIMSDK" className="link-hover link">
            {text[language].developer.github}
          </Link>
        </div>
        <div>
          <span className="footer-title">{text[language].company.title}</span>
          <Link href={`/${language}/about`} className="link-hover link">
            {text[language].company.about}
          </Link>
        </div>
        <div>
          <span className="footer-title">{text[language].contact.title}</span>
          <p>{text[language].contact.wechat}</p>
          <p>XiaoHong_yaokaixinya</p>
          <Image src="/images/contact.jpg" alt="" width={60} height={60} />
        </div>
      </footer>
      <div className="footer-center pb-6 pt-12">
        <a
          className="link-hover link text-sm text-[#006CFFFF]"
          href="https://beian.miit.gov.cn/"
          target="_blank"
        >
          蜀ICP备2021015500号
        </a>
      </div>
    </div>
  );
};

export default FooterBar;

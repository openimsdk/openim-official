"use client";

import Image from "next/image";
import { Locale } from "@/i18n-config";
import { usePathname } from "next/navigation";

const text = {
  zh: {
    product: "产品",
    sdk: "开源SDK",
    demo: "商用体验demo",
  },
  en: {},
};

const FooterBar = () => {
  const pathname = usePathname();
  const language = pathname.split("/")[1] as Locale;

  return (
    <div>
      <footer className="footer grid grid-cols-2 gap-x-4 gap-y-8 px-[8vw] py-10 text-neutral-content md:flex md:justify-between">
        <div>
          <span className="footer-title">产品</span>
          <a className="link-hover link">开源SDK</a>
          <a className="link-hover link">商用体验demo</a>
        </div>
        <div>
          <span className="footer-title">开发者</span>
          <a className="link-hover link">文档</a>
          <a className="link-hover link">GitHub</a>
        </div>
        <div>
          <span className="footer-title">公司</span>
          <a className="link-hover link">关于</a>
        </div>
        <div>
          <span className="footer-title">联系我们</span>
          <a className="link-hover link">商业微信</a>
          <a className="link-hover link">XiaoHong_yaokaixinya</a>
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

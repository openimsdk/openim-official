import Image from "next/image"

const FooterBar = () => {
  return (
    <div>
      <footer className="footer px-[8vw] py-10 text-neutral-content ">
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
      <div className="footer-center py-20">
        <a className="link-hover link text-[#006CFFFF]">蜀引1CP备2021015500号</a>
      </div>
    </div>
  )
}

export default FooterBar

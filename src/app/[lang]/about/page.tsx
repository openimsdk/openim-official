import Image from "next/image";

const About = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Image
        className="absolute -left-6 top-2"
        src="/images/honeycomb.png"
        width={250}
        height={150}
        alt=""
      />
      <div className="mx-[8vw] my-6">
        <div className="py-12">
          <span className="text-4xl font-bold text-white">关于</span>
          <span className="text-4xl font-bold text-[#006CFFFF]">我们</span>
        </div>
        <ul className="relative pb-12">
          <li className="max-w-3xl">
            <p className="py-4 text-lg font-extrabold">托云信息技术（成都）有限公司</p>
            <p className="text-sm sm:text-base">
              我们致力于通过开源模式，为全球企业/开发者提供简单、易用、高效的IM服务和实时音视频通讯能力，帮助开发者降低项目的开发成本，
              并让开发者掌控业务的核心数据。
            </p>
          </li>
          <li className="max-w-3xl py-8">
            <p className="py-4 text-lg font-extrabold">开源的价值</p>
            <p className="text-sm sm:text-base">
              从公司成立之初就将“开源”作为核心战略来推进，开源充分体现了自由、平等、分享的互联网精神。
              全球范围频繁发生的数据泄露、勒索病毒、隐私滥用等安全事件一次次给企业敲响警钟，企业管理者
              对数据资产的价值、数据安全的重要性有了更清晰的认识，数据安全成就企业核心价值。IM作为核心
              业务数据，安全的重要性毋庸置疑，OpenIM开源以及私有化部署让企业能更放心使用。
            </p>
          </li>
          <li className="max-w-3xl">
            <p className="py-4 text-lg font-extrabold">我们的团队</p>
            <p className="text-sm sm:text-base">
              创始团队来自资深IM技术团队，我们致力于用开源技术创造服务价值，打造轻量级、高可用的IM架构，
              开发者只需简单调用SDK,即可在应用内构建多种即时通讯及实时音视频互动场景。OpenIM邀请全球
              技术极客参与技术优化，让开发者轻松集成，让每一个应用都具备IM功能，同时考虑企业的接入成本、
              服务器资源以及最重要的数据安全性和私密性。
            </p>
          </li>
          <Image
            className="absolute hidden lg:-right-40 lg:top-10 lg:block"
            src="/images/hero.png"
            alt=""
            width={700}
            height={700}
          />
        </ul>
      </div>
    </div>
  );
};

export default About;

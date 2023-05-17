import Image from "next/image"
import { ChevronRightIcon } from "@heroicons/react/20/solid"

export default function Home() {
  return (
    <main>
      <div className="mx-[8vw] my-20 sm:my-36 md:flex md:flex-row md:justify-between">
        <div className="w-full sm:pr-2 md:w-1/2 md:pr-5  xl:pr-20">
          <p className="bg-gradient-to-b from-[#006CFFFF] to-[#0062FFFF] bg-clip-text  text-xl font-semibold  text-transparent sm:text-2xl  lg:text-3xl xl:text-4xl">
            OpenIM
          </p>
          <p className="py-5 text-sm sm:text-lg lg:text-2xl">
            Open source SDK for Instant Messaging
          </p>
          <p className="pb-5 text-sm sm:text-lg lg:text-2xl">
            开源、免费、通用的即时通讯组件
          </p>
          <p className="text-xs sm:text-sm md:text-base">
            Open-M借鉴并优化了微信的通讯架构，实现了高性能、轻量级、易扩展等重要特性。开发者通过集成Open-M组件，并私有化部署服务端，可以将即时通讯、实时网络能力免费、快速集成到自身应用中，并确保业务数据的安全性和私密性。
          </p>
          <div className="mb-6 mt-10 flex flex-row md:mt-24">
            <button className="btn_polygon  h-8 w-32 bg-[#006CFFFF] md:h-12 md:w-44 md:flex-shrink-0">
              开始体验
            </button>
            <div className="relative ml-5 h-8 w-32 md:h-12 md:w-44">
              <div className="btn_polygon_border h-8 w-32 bg-white md:h-12 md:w-44"></div>
              <button className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-8 w-32 flex-row items-center justify-center md:h-12 md:w-44">
                <p>阅读文档</p>
                <ChevronRightIcon className="h-6 w-8 pl-2 text-[#006CFFFF]" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full sm:pl-2 md:w-1/2 md:pl-5 xl:pl-20">
          <Image width={554} height={400} src="/images/code.jpg" alt="code" />
        </div>
      </div>
      <div className="relative mx-[8vw]">
        <div className="flex flex-row justify-center">
          <p className="text-xl font-semibold  sm:text-2xl lg:text-3xl xl:text-4xl ">
            加入世界最好的
          </p>
          <span className="text-xl font-semibold  text-[#006CFFFF] sm:text-2xl lg:text-3xl xl:text-4xl">
            建设者
          </span>
        </div>
        <p className="py-5 text-center text-sm sm:text-base lg:text-xl">
          LiveKit的开发者社区，从大型企业到下一代初创公司，都在构建多人互联网。
        </p>
        <div className="flex flex-row justify-center py-4">
          <div className="relative ml-5 h-8 w-40 md:h-12 md:w-44">
            <div className="btn_polygon_border h-8 w-40 bg-white md:h-12 md:w-44"></div>
            <button className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-8 w-40 flex-row items-center justify-center md:h-12 md:w-44">
              <Image
                width={16}
                height={16}
                src="/fonts/github.png"
                alt="github"
                className="mr-3 md:mr-6"
              />
              <p className="text-sm md:text-base">查看github</p>
            </button>
          </div>
          <div className="relative ml-3 h-8 w-40 md:h-12 md:w-44">
            <div className="btn_polygon_border h-8 w-40 bg-white md:h-12 md:w-44"></div>
            <button className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-8 w-40 flex-row items-center justify-center md:h-12 md:w-44">
              <Image
                width={16}
                height={16}
                src="/fonts/slack.png"
                alt="github"
                className="mr-2 md:mr-6"
              />
              <p className="text-sm md:text-base">加入我们的slack</p>
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-center py-10 sm:py-20">
          <div>
            <p className="pb-4 text-3xl font-thin sm:text-4xl">8.9K</p>
            <p className="text-xs font-thin">GITHUB STARS</p>
          </div>
          <div className="px-6 sm:px-20">
            <p className="pb-4 text-3xl font-thin sm:text-4xl">2.0K</p>
            <p className="text-xs font-thin">SLACK MEMBERS</p>
          </div>
          <div>
            <p className="pb-4 text-3xl font-thin sm:text-4xl">2.0K</p>
            <p className="text-xs font-thin">PROJECTS</p>
          </div>
        </div>
        <div
          className="absolute"
          style={{
            left: `${-10}vw`,
            bottom: `${-10}vw`,
          }}
        >
          <Image src="/images/honeycomb.png" alt="" width={200} height={200} />
        </div>
        <div
          className="absolute right-0"
          style={{
            bottom: `${-10}vw`,
          }}
        >
          <Image src="/images/arrowdown.png" alt="" width={20} height={30} />
        </div>
      </div>
      <div className="mx-[8vw] my-16 sm:my-60 md:flex md:flex-row md:justify-between ">
        <div className="relative py-20 md:order-2 md:flex-1">
          <Image
            src="/images/groupchat.png"
            alt=""
            width={514}
            height={336}
            className="absolute right-2 top-0"
          />
          <Image
            src="/images/sketchpad.png"
            alt=""
            width={250}
            height={160}
            className="absolute left-0 top-10"
          />
        </div>
        <div className="pt-24 sm:pt-56 md:order-1 md:flex-1 md:pt-0">
          <div>
            <span className="text-xl  lg:text-2xl">支持多种</span>
            <span className="text-xl text-[#006CFFFF]  lg:text-2xl">消息类型</span>
          </div>
          <p className="py-4 text-xs leading-loose sm:py-10 sm:text-lg md:pr-20">
            文本消息、图片、视频、语音、文件、位置自定义、引用、卡片等多种消息类型。支持1对1和多人音视频，根据网络自动调整清晰度。
          </p>
        </div>
      </div>
      <div className="mx-[8vw] my-16 sm:my-60 md:flex md:flex-row md:justify-between ">
        <div className="relative py-20 md:order-2 md:flex-1">
          <Image
            src="/images/groupchat.png"
            alt=""
            width={514}
            height={336}
            className="absolute right-2 top-0"
          />
          <Image
            src="/images/sketchpad.png"
            alt=""
            width={250}
            height={160}
            className="absolute left-0 top-10"
          />
        </div>
        <div className="pt-24 sm:pt-56 md:order-1 md:flex-1 md:pt-0">
          <div>
            <span className="text-xl  lg:text-2xl">随时随地</span>
            <span className="text-xl  text-[#006CFFFF] lg:text-2xl">高效会议</span>
          </div>
          <p className="py-4 text-xs leading-loose sm:py-10 sm:text-lg md:pr-20">
            基于IM的100%可靠必达信令能力打通M系统，和聊天应用深度整合。单会议支持同时百人视频，千人订阅，服务端音视频录制。
          </p>
        </div>
      </div>
      <div className="mx-[8vw] my-16 sm:my-60 md:flex md:flex-row md:justify-between ">
        <div className="relative py-20 md:order-2 md:flex-1">
          <Image
            src="/images/groupchat.png"
            alt=""
            width={514}
            height={336}
            className="absolute right-2 top-0"
          />
          <Image
            src="/images/sketchpad.png"
            alt=""
            width={250}
            height={160}
            className="absolute left-0 top-10"
          />
        </div>
        <div className="pt-24 sm:pt-56 md:order-1 md:flex-1 md:pt-0">
          <div>
            <span className="text-xl  lg:text-2xl">单聊群聊满足各种</span>
            <span className="text-xl  text-[#006CFFFF] lg:text-2xl">社交场景</span>
          </div>
          <p className="py-4 text-xs leading-loose sm:py-10 sm:text-lg md:pr-20">
            社交场景全覆盖，快速搭建社交应用·建群进群数量无限制，新进群成员查看历史消息，大群消息按需加载群聊已读回执
            ，精确到具体成员@单人 @多人 @所有人。
          </p>
        </div>
      </div>
      <div className="mx-[8vw] md:my-40 md:flex md:flex-row md:justify-between">
        <div className="pb-16 md:flex-1 md:py-0">
          <span className="text-4xl">OpenIM的</span>
          <span className="text-4xl text-[#006CFFFF]">优势</span>
        </div>
        <div className="md:flex-1">
          <ul>
            <li className="mb-8 flex flex-row sm:mb-12">
              <span className="pr-4 pt-4 opacity-50">01</span>
              <div>
                <p className="text-lg sm:text-2xl">IM技术专家打造，多年IM从业经验</p>
                <p className="py-5 text-sm opacity-50 sm:text-base">
                  优秀的技术架构，经受过海量用户检验;
                </p>
                <div className="border-b pb-5 opacity-20"></div>
              </div>
            </li>
            <li className="mb-8 flex flex-row sm:mb-12">
              <span className="pr-4 pt-4 opacity-50">02</span>
              <div>
                <p className="text-lg sm:text-2xl">完整组建，一件部署，轻松集成</p>
                <p className="py-5 text-sm opacity-50 sm:text-base">
                  客户端提炼成方便集成的SDK，服务带通过docker一键部署，运营管理系统展示后台数据
                </p>
                <div className="border-b pb-5 opacity-20"></div>
              </div>
            </li>
            <li className="mb-8 flex flex-row sm:mb-12">
              <span className="pr-4 pt-4 opacity-50">03</span>
              <div>
                <p className="text-lg sm:text-2xl">
                  IM SDK全开源，不存在任何闭源收费版本
                </p>
                <p className="py-5 text-sm opacity-50 sm:text-base">
                  增加开源社区的参与积极性，产生黏性、惯性、认同感、归属感以及忠诚度，引入更多技术极客，进一步完善OpenlM;
                </p>
                <div className="border-b pb-5 opacity-20"></div>
              </div>
            </li>
            <li className="mb-8 flex flex-row sm:mb-12">
              <span className="pr-4 pt-4 opacity-50">01</span>
              <div>
                <p className="text-lg sm:text-2xl">
                  开源免费，给初创企业每年节省上万费用
                </p>
                <p className="py-5 text-sm opacity-50 sm:text-base">
                  对于使用IM云服务的企业，每年可以节省上万乃至数十万费用;
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-30 flex flex-col items-center">
        <div className="py-5">
          <span className="text-3xl sm:text-4xl">建立在</span>
          <span className="text-3xl text-[#006CFFFF] sm:text-4xl">开源之上</span>
        </div>
        <p className="mx-[8vw] text-sm sm:px-0 sm:text-base">
          LiveKit 的堆栈——媒体服务器、客户端 SDK、辅助服务——是永远免费和开源的。
        </p>
        <p className="mx-[8vw] py-3 text-sm sm:px-0 sm:py-0 sm:text-base">
          您可以在云管理和自托管之间切换，而无需更改一行代码。
        </p>
        <p className="pt-8 text-sm opacity-50 sm:pt-16 sm:text-base">
          越来越多的视频和音频存储库可供克隆、贡献或分叉:
        </p>
        <Image src="/images/types.jpg" alt="types" width={2000} height={400}></Image>
      </div>
      <div className="flex flex-col items-center py-28 sm:py-40">
        <div>
          <span className="text-xl text-[#006CFFFF] sm:text-2xl md:text-3xl ">
            开源、免费、通用
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl">的即时通讯组件</span>
        </div>
        <p className="pt-4 text-xs sm:text-lg">
          Open source, free, and universal instant messaging components
        </p>
        <div className="mb-6 mt-10 flex flex-row md:mt-24">
          <button className="btn_polygon  h-8 w-32 bg-[#006CFFFF] md:h-12 md:w-44 md:flex-shrink-0">
            开始体验
          </button>
          <div className="relative ml-5 h-8 w-32 md:h-12 md:w-44">
            <div className="btn_polygon_border h-8 w-32 bg-white md:h-12 md:w-44"></div>
            <button className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-8 w-32 flex-row items-center justify-center md:h-12 md:w-44">
              <p>阅读文档</p>
              <ChevronRightIcon className="h-6 w-8 pl-2 text-[#006CFFFF]" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

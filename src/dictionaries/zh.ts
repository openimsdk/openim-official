const zh = {
  home: {
    part1: {
      en: "Open source SDK for Instant Messaging",
      text: "开源、通用的即时通讯组件",
      desc: "OpenIM包括服务端和客户端SDK，实现了高性能、轻量级、易扩展等重要特性。开发者通过集成OpenIM SDK，并私有化部署服务端，可以将即时通讯、实时网络能力快速集成到自身应用中，确保业务数据的安全性和私密性。",
      btn_begin: "开始体验",
      btn_docs: "阅读文档",
    },
    part2: {
      title_pre: "加入全球领先的",
      title: "IM开源社区",
      desc: "OpenIM社区，覆盖个人开发者、初创企业和大型企业。",
      github: "查看GitHub",
      join: "加入微信社区",
      github_stars: "GITHUB STARS",
      slack_members: "微信社群",
      projects: "项目",
    },
    part3: {
      title_pre: "支持多种",
      title: "消息类型",
      img: "/images/message_zh.png",
      desc: "支持文本、图片、表情、语音、视频、地理位置、文件、引用、名片、系统通知、自定义等几乎所有消息类型，支持单人及多人音视频通话。\n终端支持iOS、Android、Flutter、uni-app、ReactNative、Electron、Web、H5。",
    },
    part4: {
      title_pre: "随时随地",
      title: "高效会议",
      img: "/images/meeting_zh.png",
      desc: "基于IM的100%可靠必达信令能力打通IM系统，和聊天应用深度整合。单会议支持同时百人视频，千人订阅，服务端音视频录制。",
    },
    part5: {
      title_pre: "单聊群聊满足各种",
      title: "社交场景",
      img: "/images/social_zh.png",
      desc: "APP管理员、群主、群管理员和普通成员四种角色。禁言、群公告、进群验证、群成员无上限、群消息按需加载等强大的群组功能。",
    },
    part6: {
      title_pre: "特色",
      title: "功能",
      img: "/images/feature_zh.png",
      desc: "支持自定义时长的阅后即焚私密聊天，消息编辑功能拓宽社交场景，让即时通讯多元化且更有趣。",
    },
    part7: {
      title_pre: "OpenIM的",
      title: "优势",
      sub_title: "开源、通用的即时通讯组件。一键部署，轻松集成。",
      t1: {
        title: "开源",
        desc: "核心代码开源，数据自我掌控，打造全球领先的IM开源社区。",
      },
      t2: {
        title: "易扩展",
        desc: "服务端采用golang实现，首创“一切皆消息”的通讯模型，轻松实现自定义消息和扩展功能。",
      },
      t3: {
        title: "高性能",
        desc: "支持集群分层治理架构，经受过海量用户检验，抽象在线消息、离线消息、历史消息存储模型。",
      },
      t4: {
        title: "全平台支持",
        desc: "iOS、Android原生；Flutter、uni-app、ReactNative跨端；React、Vue等所有主流web前端框架；小程序；PC支持Electron。",
      },
    },
    part8: {
      title_pre: "建立在",
      title: "开源之上",
      desc1: "OpenIM的核心--服务端以及客户端SDK--是永远开源的。",
      desc2: "不同平台的demo可供参考：",
    },
    part9: {
      title_pre: "通用",
      title: "的即时通讯组件",
      desc: "开源、安全、可替代云服务商",
      btn_begin: "开始体验",
      btn_docs: "阅读文档",
    },
  },
  price: {
    title_pre: "选择合适的",
    title: "IM模块",
    desc: "分模块付费，灵活搭配购买",
    freeTable: {
      title: "免费项目",
      thead: ["项目", "开源协议", "费用"],
      tbody: [
        {
          project: "open-im-server",
          protocol: "Apache-2.0 License",
          price: "100%开源，免费商用",
          url: "https://github.com/OpenIMSDK/open-im-server",
        },
        {
          project: "openim-sdk-core",
          protocol: "Apache-2.0 License",
          price: "100%开源，免费商用",
          url: "https://github.com/OpenIMSDK/openim-sdk-core",
        },
        {
          project: "open-im-sdk-flutter",
          protocol: "Apache-2.0 License",
          price: "100%开源，免费商用",
          url: "https://github.com/OpenIMSDK/open-im-sdk-flutter",
        },
        {
          project: "open-im-sdk-uni-app",
          protocol: "Apache-2.0 License",
          price: "100%开源，免费商用",
          url: "https://github.com/OpenIMSDK/open-im-sdk-uniapp",
        },
        {
          project: "open-im-sdk-ios",
          protocol: "Apache-2.0 License",
          price: "100%开源，免费商用",
          url: "https://github.com/OpenIMSDK/open-im-sdk-ios",
        },
        {
          project: "open-im-sdk-reactnative",
          protocol: "Apache-2.0 License",
          price: "100%开源，免费商用",
          url: "https://github.com/OpenIMSDK/open-im-sdk-reactnative",
        },
        {
          project: "open-im-sdk-android",
          protocol: "Apache-2.0 License",
          price: "100%开源，免费商用",
          url: "https://github.com/OpenIMSDK/open-im-sdk-android",
        },
        {
          project: "open-im-sdk-web-wasm",
          protocol: "Apache-2.0 License",
          price: "100%开源，免费商用",
          url: "https://github.com/OpenIMSDK/open-im-sdk-web-wasm",
        },
      ],
    },
    paidTables: {
      title: "付费项目",
      desc: "联系商务咨询价格",
      IMTable: {
        thead: ["项目", "说明"],
        tbody: [
          {
            project: "客户端版本",
            desc: "",
          },
          {
            project: "基础版",
            desc: "包含IM软件基本功能，服务端用开源的即可",
          },
          {
            project: "高级版",
            desc: "增加朋友圈、消息加密、消息群发助手、消息定期删除功能，服务端使用高级版服务端",
          },
          {
            project: "高级版+音视频",
            desc: "增加音视频通话、朋友圈、消息加密、消息群发助手、消息定期删除功能，服务端使用高级版服务端",
          },
          {
            project: "客户端种类",
            desc: "",
          },
          {
            project: "iOS原生",
            desc: "带完整UI界面",
          },
          {
            project: "Android原生",
            desc: "带完整UI界面",
          },
          {
            project: "Flutter跨端（含iOS、Android）",
            desc: "带完整UI界面",
          },
          {
            project:
              "electron跨端(含Web、Windows、 Mac、Linux，国产系统如：统信、 麒麟）",
            desc: "带完整UI界面",
          },
          {
            project: "uni-app跨端（含iOS、Android）",
            desc: "带完整UI界面",
          },
        ],
      },
      OtherClientTable: {
        thead: ["其他客户端", "说明"],
        tbody: [
          {
            project: "视频会议",
            desc: "客户端带完整UI界面，需先购买音视频服务端。",
          },
          {
            project: "朋友圈",
            desc: "客户端带完整UI界面，服务端用开源的即可（PC端暂未开发）",
          },
        ],
      },
      ServiceTable: {
        thead: ["服务端", "说明"],
        tbody: [
          {
            project: "基于SFU音视频通话",
            desc: "提供二进制文件，支持单人、多人音视频。支持视频会议、共享屏幕，主持人禁麦。",
          },
          {
            project: "IM高级版服务端",
            desc: "支持消息加密、消息定时删除等功能。",
          },
          {
            project: "Chat业务系统高级版服务端",
            desc: "支持朋友圈、消息群发助手等功能。",
          },
        ],
      },
      OtherProject: {
        thead: ["其他项目", "说明"],
        tbody: [
          {
            project: "安卓自启动保活",
            desc: "需要手动设置自启动，显示在最顶层，后台弹出界面，锁屏显示、音视频通话弹窗、新消息提醒。",
          },
          {
            project: "管理后台web端",
            desc: "完整UI界面。包括用户管理、群组管理、注册管理、应用管理。",
          },
        ],
      },
    },
  },
};

export default zh;

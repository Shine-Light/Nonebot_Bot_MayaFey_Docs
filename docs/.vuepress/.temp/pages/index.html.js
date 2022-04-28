export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/image/hero.png",
    "heroText": "真宵机器人",
    "tagline": "专注群聊的QQ机器人",
    "actions": [
      {
        "text": "快速上手",
        "link": "/guide/",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "0基础",
        "details": "哪怕你是一个完全0基础的小白,也可以使用"
      },
      {
        "title": "自定义",
        "details": "高度自定义,绝大多数插件都可以自定义"
      },
      {
        "title": "娱乐",
        "details": "内置大量生活/娱乐功能"
      },
      {
        "title": "权限管理",
        "details": "配备完整的权限系统,不用担心权限问题"
      },
      {
        "title": "在线更新",
        "details": "无需进行繁琐的手动更新,可以自动更新文件并重启"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022-present Shine_Light"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

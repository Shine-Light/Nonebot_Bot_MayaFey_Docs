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
        "type": "secondary"
      },
      {
        "text": "项目介绍",
        "link": "/introduce/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "自定义",
        "details": "大多数插件都可以自定义"
      },
      {
        "title": "娱乐",
        "details": "内含各种生活/娱乐功能"
      },
      {
        "title": "权限管理",
        "details": "再也不用担心权限问题"
      },
      {
        "title": "在线更新",
        "details": "无需进行繁琐的手动更新,可以自动更新"
      },
      {
        "title": "免费开源",
        "details": "项目完全免费且开源"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022-present <a href=\"https://shinelight.xyz\" target=\"_blank\">Shine_Light</a>",
    "footerHtml": true
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "createdTime": 1651147298000,
    "updatedTime": 1651998490000,
    "contributors": [
      {
        "name": "Shine-Light",
        "email": "3120815902@qq.com",
        "commits": 4
      }
    ]
  }
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

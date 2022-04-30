export const themeData = {
  "logo": "/image/logo.png",
  "repo": "https://github.com/Shine-Light/Nonebot_Bot_MayaFey_Docs",
  "repoLabel": "项目地址",
  "editLinkText": "在Github上编辑此页",
  "docsDir": "docs",
  "lastUpdated": true,
  "lastUpdatedText": "最后更新时间",
  "notFound": [
    "哎呀,页面找不到了",
    "页面走丢了",
    "404 Not Found"
  ],
  "backToHome": "返回主页",
  "toggleDarkMode": "切换夜间模式",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "功能",
      "link": "/feature/"
    },
    {
      "text": "指南",
      "link": "/guide/"
    },
    {
      "text": "零基础",
      "link": "/easy"
    },
    {
      "text": "我的主页",
      "link": "https://shinelight.xyz"
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "text": "指南",
        "children": [
          "/guide/",
          "/guide/setup/setup",
          "/guide/setup/configure",
          "/guide/setup/run/"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "contributors": true,
  "contributorsText": "Contributors",
  "openInNewWindow": "open in new window",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

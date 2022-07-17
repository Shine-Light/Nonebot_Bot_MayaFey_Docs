export const themeData = {
  "logo": "/image/logo.png",
  "repo": "https://github.com/Shine-Light/Nonebot_Bot_MayaFey",
  "docsRepo": "https://github.com/Shine-Light/Nonebot_Bot_MayaFey_Docs",
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
  "sidebarDepth": 5,
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "介绍",
      "link": "/introduce"
    },
    {
      "text": "更新日志",
      "link": "/updatelog"
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
      "link": "/easy/"
    },
    {
      "text": "常见问题",
      "link": "/problem"
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
        "collapsible": true,
        "children": [
          "/guide/",
          "/guide/setup",
          "/guide/configure",
          "/guide/run",
          "/guide/use"
        ]
      }
    ],
    "/easy/": [
      {
        "text": "零基础",
        "collapsible": true,
        "children": [
          "/easy/",
          "/easy/pre",
          "/easy/setup",
          "/easy/configure",
          "/easy/run",
          "/easy/use"
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

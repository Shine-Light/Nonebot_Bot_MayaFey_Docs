export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "真宵机器人",
  "description": "专注群聊的QQ机器人",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/image/logo.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

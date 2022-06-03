export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "注意",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/README.md",
  "git": {
    "createdTime": 1651147298000,
    "updatedTime": 1653731215000,
    "contributors": [
      {
        "name": "Shine-Light",
        "email": "3120815902@qq.com",
        "commits": 7
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

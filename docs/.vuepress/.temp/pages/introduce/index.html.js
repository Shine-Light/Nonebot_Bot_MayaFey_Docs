export const data = {
  "key": "v-1b4deaa9",
  "path": "/introduce/",
  "title": "本项目",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "introduce/README.md",
  "git": {
    "createdTime": 1651998490000,
    "updatedTime": 1655443064000,
    "contributors": [
      {
        "name": "Shine-Light",
        "email": "3120815902@qq.com",
        "commits": 5
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

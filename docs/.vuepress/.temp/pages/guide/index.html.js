export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "向导",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "注意",
      "slug": "注意",
      "children": []
    },
    {
      "level": 2,
      "title": "名称来源",
      "slug": "名称来源",
      "children": []
    },
    {
      "level": 2,
      "title": "声明",
      "slug": "声明",
      "children": []
    }
  ],
  "filePathRelative": "guide/README.md",
  "git": {
    "createdTime": 1651147298000,
    "updatedTime": 1651319160000,
    "contributors": [
      {
        "name": "Shine-Light",
        "email": "3120815902@qq.com",
        "commits": 2
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

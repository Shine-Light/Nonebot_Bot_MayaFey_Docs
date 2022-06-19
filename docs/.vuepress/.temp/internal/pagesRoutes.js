import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-0ae167c7","/easy/configure.html",{"title":"配置"},["/easy/configure","/easy/configure.md"]],
  ["v-caeef5ac","/easy/pre.html",{"title":"前置准备"},["/easy/pre","/easy/pre.md"]],
  ["v-14801d14","/easy/",{"title":"前言"},["/easy/index.html","/easy/README.md"]],
  ["v-18592e42","/easy/run.html",{"title":"运行"},["/easy/run","/easy/run.md"]],
  ["v-3bb4e090","/easy/setup.html",{"title":"安装"},["/easy/setup","/easy/setup.md"]],
  ["v-7554641c","/feature/",{"title":"功能"},["/feature/index.html","/feature/README.md"]],
  ["v-2039e99f","/guide/configure.html",{"title":"配置"},["/guide/configure","/guide/configure.md"]],
  ["v-fffb8e28","/guide/",{"title":"注意"},["/guide/index.html","/guide/README.md"]],
  ["v-334df21a","/guide/run.html",{"title":"运行"},["/guide/run","/guide/run.md"]],
  ["v-6c880e68","/guide/setup.html",{"title":"安装"},["/guide/setup","/guide/setup.md"]],
  ["v-1b4deaa9","/introduce/",{"title":"本项目"},["/introduce/index.html","/introduce/README.md"]],
  ["v-83047d26","/updatelog/",{"title":"更新日志"},["/updatelog/index.html","/updatelog/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)

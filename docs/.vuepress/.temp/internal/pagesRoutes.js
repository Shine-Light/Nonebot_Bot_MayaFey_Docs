import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-7554641c","/feature/",{"title":"功能"},["/feature/index.html","/feature/README.md"]],
  ["v-fffb8e28","/guide/",{"title":"向导"},["/guide/index.html","/guide/README.md"]],
  ["v-59159701","/guide/easy/",{"title":"easy"},["/guide/easy/index.html","/guide/easy/README.md"]],
  ["v-76a2b31e","/guide/setup/configure.html",{"title":"配置"},["/guide/setup/configure","/guide/setup/configure.md"]],
  ["v-ec059728","/guide/setup/run.html",{"title":"运行"},["/guide/setup/run","/guide/setup/run.md"]],
  ["v-571ff78c","/guide/setup/setup.html",{"title":"安装"},["/guide/setup/setup","/guide/setup/setup.md"]],
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

import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("H:/project/Bot/Vuepress/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("H:/project/Bot/Vuepress/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}

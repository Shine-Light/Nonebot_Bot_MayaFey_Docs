const { defaultTheme } = require('@vuepress/theme-default')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { gitPlugin } = require('@vuepress/plugin-git')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { activeHeaderLinksPlugin } = require('@vuepress/plugin-active-header-links')
const { pwaPlugin } = require('@vuepress/plugin-pwa')
module.exports = {
    title: '真宵机器人',
    description: '专注群聊的QQ机器人',
    head: [
        ['link', {rel: 'icon', href: '/image/logo.png'}],
    ],
    markdown: {
        extractHeaders: {
            level: [2,3,4,5]
        }
    },
    theme: defaultTheme({
        logo: '/image/logo.png',
        repo: 'https://github.com/Shine-Light/Nonebot_Bot_MayaFey',
        docsRepo: 'https://github.com/Shine-Light/Nonebot_Bot_MayaFey_Docs',
        repoLabel: '项目地址',
        editLinkText: '在Github上编辑此页',
        docsDir: 'docs',
        lastUpdated: true,
        lastUpdatedText: '最后更新时间',
        notFound: ['哎呀,页面找不到了', '页面走丢了', '404 Not Found'],
        backToHome: '返回主页',
        toggleDarkMode: '切换夜间模式',
        sidebarDepth: 5,
        navbar: [
            { text: '首页', link: '/' },
            { text: '功能', link: '/feature/' },
            { text: '指南', link: '/guide/' },
            { text: '零基础', link: '/easy/' },
            { text: '我的主页', link: 'https://shinelight.xyz'}, 
        ],
        sidebar: {
            '/guide/': [{
                text: '指南',
                collapsible: true,
                children: [ '/guide/',
                            '/guide/setup',
                            '/guide/configure',
                            '/guide/run'
                ]
            }],
            '/easy/': [{
                text: '零基础',
                collapsible: true,
                children: [ '/easy/',
                            '/easy/pre',
                            '/easy/setup',
                            '/easy/configure',
                            '/easy/run'
                ]
            }]
        }
    }),
    plugins: [
        backToTopPlugin(), mediumZoomPlugin(),nprogressPlugin(),
        gitPlugin({
            // 配置项
        }),
        activeHeaderLinksPlugin({
            // 配置项
        }),
        pwaPlugin({
            skipWaiting: true,
        }),
    ]

}
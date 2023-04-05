const { defaultTheme } = require('@vuepress/theme-default')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { gitPlugin } = require('@vuepress/plugin-git')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { activeHeaderLinksPlugin } = require('@vuepress/plugin-active-header-links')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
var md = require('markdown-it')({
    level: [2, 3]
});

module.exports = {
    title: '真宵机器人',
    description: '专注群聊的QQ机器人',
    head: [
        ['link', {rel: 'icon', href: '/image/logo.png'}],
    ],
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
        navbar: [
            { text: '首页', link: '/' },
            { text: '介绍', link: '/introduce' },
            { text: '更新日志', link: '/updatelog' },
            { text: '功能', link: '/feature/' },
            { text: '指南', link: '/guide/' },
            { text: '零基础', link: '/easy/' },
            { text: '开发文档', link: '/develop/'},
            { text: '常见问题', link: '/problem'},
            { text: '我的主页', link: 'https://shinelight.xyz'}, 
        ],
        sidebar: {
            '/guide/': [{
                text: '指南',
                collapsible: true,
                children: [ '/guide/',
                            '/guide/setup',
                            '/guide/configure',
                            '/guide/run', 
                            '/guide/use'
                ]
            }],
            '/easy/': [{
                text: '零基础',
                collapsible: true,
                children: [ '/easy/',
                            '/easy/pre',
                            '/easy/setup',
                            '/easy/configure',
                            '/easy/run',
                            '/easy/use'
                ]
            }],
            '/develop/': [{
                text: '开发文档',
                collapsible: true,
                children: [ '/develop/',
                            '/develop/standard/',
                            '/develop/config/',
                            '/develop/matcherCtrl/',
                            '/develop/credit/',
                            '/develop/utils/',
                            '/develop/api/',
                            '/develop/other.md'
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
        docsearchPlugin({
            apiKey: 'bbe3ea1114293eee287d354d6815ae1b', 
            indexName: 'mayafey-shinelight', 
            appId: '8XD51375OR', 
            placeholder: '搜索文档', 
            translations: {
                button: {
                    buttonText: '搜索文档',
                }
            }
        })
    ],
    markdown: {
        headers: {
            level: [2, 3, 4]
        }
    },
}
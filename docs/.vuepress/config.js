const { defaultTheme } = require('@vuepress/theme-default')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { gitPlugin } = require('@vuepress/plugin-git')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
module.exports = {
    plugins: [
        backToTopPlugin(), mediumZoomPlugin(),nprogressPlugin(),
        gitPlugin({
            // 配置项
        })
    ],
    title: '真宵机器人',
    description: '专注群聊的QQ机器人',
    markdown: {
        extractHeaders: ['h1', 'h2', 'h3', 'h4','h5','h6']
    },
    theme: defaultTheme({
        logo: '/image/logo.png',
        repo: 'https://github.com/Shine-Light/Nonebot_Bot_MayaFey_Docs',
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
            { text: '指南', link: '/guide/' },
            { text: '功能', link: '/feature/' },
            { text: '我的主页', link: 'https://shinelight.xyz' }
        ],
        smoothScroll: true,
        darkMode: true, 
        // lastUpdated: 'Last Updated'
        sidebar: [
            {
                title: '指南',
                path: '/guide/',
                collapsable: true,
                children: [
                    {
                        title: '安装',
                        path: '/setup/',
                    }
                ]
            },
            {
                title: '功能',
                path: '/feature/',
            }
        ]
    })

}
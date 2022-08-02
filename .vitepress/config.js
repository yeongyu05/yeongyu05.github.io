// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    title: "연규의 blog",
    description: "A VitePress site",
    srcDir: mdDir,
    themeConfig: {
        sidebar: getSidebar(),
        nav: getNav()
    },

}

function getSidebar() {
    return {
        "/": [
            {
                text: 'TIL📖',
                collapsible: true,
                items: [
                    { text: '2022년07월', link: '/TIL/202207/202207' },
                    { text: '2022년07월18일', link: '/TIL/202207/20220718' },
                    { text: '2022년07월19일', link: '/TIL/202207/20220719' },
                    { text: '2022년07월20일', link: '/TIL/202207/20220720' },
                    { text: '2022년07월21일', link: '/TIL/202207/20220721' },
                    { text: '2022년07월22일', link: '/TIL/202207/20220722' },
                    { text: '2022년07월23일', link: '/TIL/202207/20220723' },
                    { text: '2022년07월24일', link: '/TIL/202207/20220724' },
                    { text: '2022년07월25일', link: '/TIL/202207/20220725' },
                    { text: '2022년07월26일', link: '/TIL/202207/20220726' },
                    { text: '2022년07월27일', link: '/TIL/202207/20220727' },
                    { text: '2022년07월28일', link: '/TIL/202207/20220728' },
                    { text: '2022년07월29일', link: '/TIL/202207/20220729' },
                    { text: '2022년07월30일', link: '/TIL/202207/20220730' },
                    { text: '2022년07월31일', link: '/TIL/202207/20220731' },
                ]
            },
            {
                text: 'TIL📖',
                collapsible: true,
                items: [
                    { text: '2022년08월', link: '/TIL/202208/202208' },
                    { text: '2022년08월01일', link: '/TIL/202207/20220801' },
                ]
            }
        ]
    }
}

function getNav() {
    return [
        {
            text: 'Menu',
            items: [
                {
                    text: 'TIL',
                    link: "/TIL/202207/202207",
                    activeMatch: "/TIL/",
                },
                {
                    text: 'TIL',
                    link: "/TIL/202208/202208",
                    activeMatch: "/TIL/",
                },
                {
                    text: '회고',
                    link: "/TIL/202207/20220722",
                    link: "/TIL/202207/20220729",
                    activeMatch: "/TIL/",
                },
            ]
        }
    ]
}

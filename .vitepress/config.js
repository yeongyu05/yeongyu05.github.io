// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    title: "연규의 blog",
    description:"A VitePress site",
    srcDir : mdDir,
    themeConfig: {
        sidebar:getSidebar(),
        nav: getNav()
    },

}

function getSidebar(){
    return {
        "/": [
            {
                text: 'TIL📖',
                collapsible: true,
                items: [
                    { text: '2022년07월', link: '/TIL/202207/202207'},
                    { text: '2022년07월18일', link: '/TIL/202207/20220718'},
                    { text: '2022년07월19일', link: '/TIL/202207/20220719'},
                    { text: '2022년07월20일', link: '/TIL/202207/20220720'},
                    { text: '2022년07월21일', link: '/TIL/202207/20220721'},
                    { text: '2022년07월22일', link: '/TIL/202207/20220722'},
                ]
            },
        ],
    }
}

function getNav(){
    return [
        {
            text: 'Menu',
            items: [
              {
                  text:'TIL',
                  link:"/TIL/202207/202207",
                  activeMatch: "/TIL/",
              },
              {
                  text:'회고',
                  link:"/TIL/202207/20220722",
                  activeMatch: "/TIL/",
              },
            ]
        }
    ]
}

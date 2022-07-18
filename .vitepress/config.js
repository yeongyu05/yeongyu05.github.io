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
                ]
            },
        ],
    }
}

function getNav(){
    return [
        {
            text:'TIL',
            link:"/TIL/202207/202207018",
            activeMatch: "/TIL/",
        },
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

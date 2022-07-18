// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    base: '/TIL/',
    title: "연규의 blog",
    description: 'A VitePress site',
    srcDir : mdDir,
    themeConfig: {
        
        sidebar:getSidebar(),
        nav: getNav()
    },
}

function getRecall(){
  return {  
      text: '회고✨',
      collapsible: true,
      items: [
        { text: '2022년 07월 넷째 주를 회고', link: '/TIL/202207/20220722'},
      ]
    };
}



function get07TIL(){
  return {
    text: 'TIL',
    collapsible: true,
    items: [
      {text: '2022/07/18', link: '/TIL/202207/20220718'},
      {text: '2022/07/22', link: '/TIL/202207/20220722'},
    ]
  }
}

function getSidebar(){
  return {
    '/TIL/202207':[
      get07TIL()
      ,
      getRecall(), 
    ],
    "/":[
      {
        text: 'TIL📖',
        collapsible: true,
        items: [
          { text: '2022년07월', link: '/TIL/202207/202207'},
        ]
      },
      getRecall()
    ],
  };
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
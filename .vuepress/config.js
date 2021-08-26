module.exports = {
  "title": "wangShuai",
  "description": "",
  "dest": "html",
  "theme": "reco",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/title.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
  ],
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "历史",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "icon": "reco-other",
        "link": "/docs/Aboutme",
      },
      {
        "text": "GitHub",
        "link": "https://github.com/HuXiaoTu",
        "icon": "reco-github"
      }
    ],
    "sidebar": {
      "/docs/": [
        "Aboutme",
      ]
    },
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "简书",
        "desc": "简约而不简单~",
        // "icon": 'reco-jianshu',
        // "logo": "https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png",
        "link": "https://www.jianshu.com/u/7c7e42943400"
      },
      {
        "title": "GitHub",
        "desc": "技术交流",
        // "icon": 'reco-github',
        // "logo": "https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png",
        "link": "https://github.com/HuXiaoTu"
      }
    ],
    "vssueConfig": {
      "platform": 'github',
      "owner": 'HuXiaoTu',
      "repo": 'img',
      "clientId": '2dc63a980a2a2eb74468',
      "clientSecret": '78546af23a6ad712ff90e4b3d5017d678f034f36',
    },
    "mode": 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    "type": "blog",
    "logo": "/logo.jpg",
    "authorAvatar": "/touxiang.gif",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "wangShuai",
    "record": "京ICP备18048655号-2",
    "recordLink": "http://www.beian.miit.gov.cn",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  "locales": {
    '/': {
      "lang": "zh-CN"
    }
  },
  "plugins": [
    "vuepress-plugin-boxx",
    "vuepress-plugin-cursor-effects",
    "kan-ban-niang", [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["wanko"],
        clean: true,
        modelStyle: {
          position: "fixed",
          left: "0px",
          bottom: "0px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ]
  ]
}
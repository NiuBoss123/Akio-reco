import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "MisakaAkio Webisite",
  description: "不努力就只能听到别人的好消息",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    logo: "https://webstatic.akio.top/user/NiuBoss123.jpg",
    author: "MisakaAkio",
    authorAvatar: "https://webstatic.akio.top/user/NiuBoss123.jpg",
    docsRepo: "https://github.com/NiuBoss123",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/posts' },
      { text: '归档', link: '/timeline' },
      { text: '关于我', link: '/about/' },
      {
        text: "其他页面",
        children: [
          { text: '个人账号', link: '/account/' },
          { text: '拥有的设备', link: '/equipment/' },
          { text: '各项开销及赞助事宜', link: '/bill-and-sponsor/' },
        ],
      },
      { text: "友情链接", link: "https://www.akio.top/friends" },
      { text: "前往主站", link: "https://www.akio.top" },
    ],
    bulletin: {
      body: [],
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});

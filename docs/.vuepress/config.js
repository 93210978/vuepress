/*
 * @Author: 陆伟
 * @Date: 2021-04-14 13:13:16
 * @LastEditTime: 2021-04-16 15:46:36
 * @LastEditors: 陆伟
 * @Description: 
 */
module.exports = {
  title: '主页',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/img/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: { // 主题配置
    logo: '/img/logo.png',
    nav:[ // 导航栏配置
      { 
        text: '前端',
        items: [
          { text: 'JavaScript', link: '/frontend/javascript/' },
          { text: 'css', link: '/frontend/css/' },
          { text: 'Vue', link: '/frontend/vue/' },
          { text: 'React', link: '/frontend/react/' },
          { text: 'Angular', link: '/frontend/angular/' },
        ]
      }
    ],
    sidebar: 'auto'
  }
};
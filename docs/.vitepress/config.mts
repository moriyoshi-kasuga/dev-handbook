import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/dev-handbook/',

  title: "開発ハンドブック",
  description: "基礎的な開発トールなどを解説",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    outline: "deep",

    socialLinks: [
      { icon: 'github', link: 'https://github.com/moriyoshi-kasuga/dev-handbook' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
  }
})

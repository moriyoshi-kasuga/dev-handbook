import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  base: '/dev-handbook/',

  title: '開発ハンドブック',
  description: '基礎的な開発トールなどを解説',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moriyoshi-kasuga/dev-handbook' },
    ],
    editLink: {
      pattern:
      'https://github.com/moriyoshi-kasuga/dev-handbook/blob/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    },

    sidebar: [
      {
        text: '環境構築',
        link: '/setup',
      },
      {
        text: 'Python',
        link: '/python',
      },
      {
        text: 'Git',
        collapsed: false,
        link: '/git/',
        items: [
          { text: 'Git', link: '/git/' },
        ],
      },
      {
        text: 'GitHub',
        collapsed: false,
        link: '/github/',
        items: [
          { text: 'GitHub', link: '/github/' },
        ],
      },
      {
        text: 'プロジェクトの進め方',
        collapsed: false,
        link: '/workflow/',
        items: [
          { text: 'Workflow', link: '/workflow/' },
        ],
      },
    ],
  },
  mermaid: {

  },
  mermaidPlugin: {
    class: 'mermaid',
  },
})

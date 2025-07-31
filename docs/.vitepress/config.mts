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
        text: 'Setup',
        link: '/setup',
      },
      {
        text: 'Python',
        link: '/python',
      },
      {
        text: 'Workflow',
        link: '/workflow/',
        items: [
          {
            text: 'Git',
            collapsed: false,
            items: [
              { text: 'ステージング', link: '/git/staging' },
              { text: 'コミット', link: '/git/commit' },
              { text: 'ブランチ', link: '/git/branch' },
              { text: 'リモート', link: '/git/remote' },
              { text: 'トラブルシューティング', link: '/git/troubleshooting' },
            ],
          },
          { text: 'GitHub', link: '/github/' },
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

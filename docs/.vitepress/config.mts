import {defineConfig} from 'vitepress';

/**
 * Utility function for editor path completion.
 *
 * Converts a relative markdown file path like "../index.md" to an absolute editor path like "/index".
 *
 * - The input must start with "../".
 * - The output will always start with "/" and not include the ".md" extension.
 *
 * Examples:
 *   r("../index.md")       // returns "/index"
 *   r("../foo/bar.md")     // returns "/foo/bar"
 *   r("../foo/")           // return "/foo/"
 *
 * @param path - The relative markdown file path (must start with "../")
 * @returns The absolute editor path (starts with "/")
 * @throws If the path does not start with "../"
 */
function r(path: string) {
  let withoutMdPath: string
  if (!path.endsWith('.md')) {
    withoutMdPath = path
  }
  else {
    withoutMdPath = path.slice(0, -3)
  }

  if (!withoutMdPath.startsWith('../')) {
    throw new Error(`Path must start with ../: ${path}`)
  }
  const currentPath = withoutMdPath.slice(3, withoutMdPath.length)
  return `/${currentPath}`
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/dev-handbook/',

  title: "開発ハンドブック",
  description: "基礎的な開発トールなどを解説",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    outline: "deep",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moriyoshi-kasuga/dev-handbook' }
    ],
    editLink: {
      pattern:
      "https://github.com/moriyoshi-kasuga/dev-handbook/blob/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "medium",
      },
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          {
            text: 'Markdown Examples',
            link: r('../markdown-examples.md'),
          },
        ]
        },
      {
        text: 'Git',
        link: r('../git/')
      },
      {
        text: 'GitHub',
        link: r('../github/')
      }
    ],
  }
})

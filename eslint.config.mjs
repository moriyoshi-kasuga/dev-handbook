import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  typescript: true,
  vue: true,
  jsonc: true,
  yaml: true,
  ignores: [
    './node_modules/',
    './docs/.vitepress/cache/',
    './docs/.vitepress/dist/',
  ],
})

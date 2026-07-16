import { defineConfig } from 'vitepress'
import { generateSidebar, watchDocsPlugin } from './generateSidebar.mjs'
const staticSidebar = [
  {
    text: '导航',
    items: [
      { text: '首页', link: '/index.md' },
      { text: '文档', link: '/Docs/index.md' }
    ]
  }
]
const config = defineConfig({
  
  title: "Lhui's WebSite",
  description: "创建由OninesixY",
  cleanUrls: true ,              // 纯净URL       \\
  // outDir: '.build',          //  Build产物目录  \\
  srcDir: "Docs",              //   文档目录        \
  lastUpdated: true,          //    开启时间戳       \
  
  head: [
    ['link', { rel: 'icon', href: '/minecraft_axolotl-cyan.ico', type: 'image/x-icon'}]
  ],

  vite: {
    plugins: [watchDocsPlugin()]
  },

  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档列表', link: 'Docs' }
    ],

    search: {
      provider: 'local',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }
    },

  }
})

// 使用 VitePress 的 srcDir 生成侧边栏
;(config.themeConfig as any).sidebar = [
  ...staticSidebar,
  ...generateSidebar(config.srcDir as string)
]

export default config
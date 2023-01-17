import { defaultTheme } from '@vuepress/theme-default'
import tabsPlugin from '@snippetors/vuepress-plugin-tabs'
import codeCopyPlugin from '@snippetors/vuepress-plugin-code-copy'

export default {
  lang: "en-US",
  title: "Snippetors' Packages",
  head: [["link", { rel: "icon", href: "/images/hero.svg" }]],
  plugins: [
    tabsPlugin({}),
    codeCopyPlugin({}),
  ],
  theme: defaultTheme(
    {
      logo: "/images/hero.svg",
      repo: "Snippetors/snippetors.github.io",
      docsDir: "docs",
      navbar: [
        { text: "vuepress-plugin-tabs", link: "/plugins/vuepress-plugin-tabs" },
        {
          text: "vuepress-plugin-code-copy",
          link: "/plugins/vuepress-plugin-code-copy",
        },
      ],
      sidebar: false,
    },
  ),
};

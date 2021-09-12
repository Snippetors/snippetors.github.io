module.exports = {
  lang: "en-US",
  title: "Snippetors' Packages",
  plugins: [["@snippetors/vuepress-plugin-tabs", {}]],
  themeConfig: {
    logo: "",
    logoDark: "",
    repo: "Snippetors/snippetors.github.io",
    docsDir: "docs",
    navbar: [
      { text: "vuepress-plugin-tabs", link: "/plugins/vuepress-plugin-tabs" },
    ],
    sidebar: false,
  },
};
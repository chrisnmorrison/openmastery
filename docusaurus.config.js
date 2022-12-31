const lightCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext");
require("dotenv").config();

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Open Education",
  tagline: "Fundraise for charity, just by learning!",
  url: "https://opened.one",
  baseUrl: "/",
  // onBrokenLinks: "throw",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.ico",
  organizationName: "chrisnmorrison", // Usually your GitHub org/user name.
  projectName: "open-mastery", // Usually your repo name.
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    navbar: {
      title: "Open Education",
      logo: {
        alt: "Open Education Logo",
        src: "img/logo.png",
      },
      items: [
        { to: "/about", label: "About", position: "left" },
        { to: "/categories", label: "Categories", position: "left" },
        {
          label: "Donations",
          to: "/donations",
          position: "left",
        },
        {
          label: "Support Us",
          to: "/support-us",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "right" },

        {
          href: "https://github.com/chrisnmorrison/open-mastery",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Open Education",
          items: [
            {
              label: "Markdown Guide",
              to: "/learn/markdown/how-to-markdown",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/openmasteryone/",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/mesmerdesign/",
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/openeducation/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Github",
              href: "https://github.com/chrisnmorrison/open-mastery",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open Education. Built with Docusaurus and React\n<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`,
    },
    prism: {
      additionalLanguages: ["java", "python"],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // id: 'product', // omitted => default instance
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          // sidebarCollapsible: true,
          // sidebarCollapsed: false,
          // ... other options
        },
        theme: { customCss: [require.resolve("./src/css/custom.scss")] },
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "python",
        path: "learn/python",
        routeBasePath: "learn/python",
        sidebarPath: require.resolve("./sidebars.js"),
        // sidebarCollapsible: true,
        // sidebarCollapsed: false,
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "java",
        path: "learn/java",
        routeBasePath: "learn/java",
        sidebarPath: require.resolve("./sidebars.js"),
        // sidebarCollapsible: true,
        // sidebarCollapsed: true,
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "C",
        path: "learn/c",
        routeBasePath: "learn/c",
        sidebarPath: require.resolve("./sidebars.js"),
        // sidebarCollapsible: true,
        // sidebarCollapsed: true,
        // ... other options
      },
    ],

    [
      "@docusaurus/plugin-content-docs",
      {
        id: "Markdown",
        path: "learn/markdown",
        routeBasePath: "learn/markdown",
        sidebarPath: require.resolve("./sidebars.js"),
        // sidebarCollapsible: true,
        // sidebarCollapsed: true,
        // ... other options
      },
    ],
  ],
};

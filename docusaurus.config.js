const lightCodeTheme = require("prism-react-renderer").themes.oceanicNext;
const darkCodeTheme = require("prism-react-renderer").themes.oceanicNext;
require("dotenv").config();

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Open Mastery",
  tagline: "Fundraise for charity, just by learning!",
  url: "https://openmastery.one",
  baseUrl: "/",
  // onBrokenLinks: "throw",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.ico",
  organizationName: "chrisnmorrison", // Usually your GitHub org/user name.
  projectName: "openmastery", // Usually your repo name.
  
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    googleAdsense: {
      dataAdClient: process.env.ADSENSE_PUB_ID,
    },
    navbar: {
      title: "Open Mastery",
      logo: {
        alt: "Open Mastery Logo",
        src: "img/logo.png",
      },
      items: [
        { to: "/about", label: "About", position: "left" },
        { to: "/courses", label: "Courses", position: "left" },
        {
          label: "Donations",
          to: "/donations",
          position: "left",
        },

        {
          type: "html",
          position: "right",
          value: `
          <a
            class="support-us-link not-blue"
            href="/support-us"
          >
            <img
            class="support-heart"
                src="/img/heart.png"
                alt="Heart icon"

                width='19'
                height='19'
              />
            Support Us
          </a>
          `,
        },
        { to: "/blog", label: "Blog", position: "left" },

        // {
        //   href: "https://github.com/chrisnmorrison/openmastery",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Open Mastery",
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
              label: "Instagram",
              href: "https://www.instagram.com/mesmerdesign/",
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/openmastery/",
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
              href: "https://github.com/chrisnmorrison/openmastery",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open Mastery. Built with Docusaurus and React\n<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/juicy-fish" title="Freepik">juicy_fish</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`,
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
        gtag: {
          trackingID: "G-NQ15YL4Q9Z", // no point keeping this private, since it's always going to show in the html!
          anonymizeIP: true,
        },
        blog: {
          blogSidebarCount: 5,
        },
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
    'docusaurus-plugin-dotenv',
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
        id: "computer-science",
        path: "learn/computer-science",
        routeBasePath: "learn/computer-science",
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

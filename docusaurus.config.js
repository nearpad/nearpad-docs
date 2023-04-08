// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NEARpad",
  tagline: "Create decentralized micro-frontend components without limits",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://nearpad.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nearpad", // Usually your GitHub org/user name.
  projectName: "nearpad-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: "/",
          editUrl: "https://github.com/nearpad/nearpad-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/nearpad/nearpad-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.png",
      navbar: {
        title: "NEARpad",
        logo: {
          alt: "NEARpad",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Documentation",
          },
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "right",
          //   label: "Tutorial",
          // },
          // { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/nearpad/nearpad-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/category/tutorial",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/NEARpad",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NEARpad.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

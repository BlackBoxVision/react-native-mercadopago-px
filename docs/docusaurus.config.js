/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "React Native MercadoPago PX",
  tagline: "Do you need support to implement the library?",
  url: "https://blackboxvision.github.io",
  baseUrl: process.env.BASE_URL || "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "BlackBoxVision",
  projectName: "react-native-mercadopago-px",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  themeConfig: {
    sidebarCollapsible: false,
    gtag: {
      trackingID: "G-0GFY9V2RXH",
      anonymizeIP: true,
    },
    navbar: {
      title: "",
      logo: {
        alt: "BBV Logo",
        src: "img/logo.png",
      },
      style: "primary",
      items: [
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          type: "doc",
          docId: "intro",
          position: "right",
          label: "Docs",
        },
        {
          href: "https://github.com/BlackBoxVision/react-native-mercadopago-px",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: "Made with ❤️ by BlackBox Vision",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        changefreq: "weekly",
        priority: 0.5,
        trailingSlash: false,
      },
    ],
    "@docusaurus/plugin-google-gtag",
  ],
};

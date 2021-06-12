/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'React Native MercadoPago PX',
  tagline: 'Dinosaurs are cool',
  url: 'https://blackboxvision.github.io',
  baseUrl: process.env.BASE_URL || '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'BlackBoxVision', 
  projectName: 'react-native-mercadopago-px', 
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  themeConfig: {
    sidebarCollapsible: false,
    gtag: {
      // TODO: replace
      trackingID: 'UA-141789564-1',
      anonymizeIP: true, 
    },
    navbar: {
      title: 'React Native MercadoPago PX',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Docs',
        },
        {
          href: 'https://github.com/BlackBoxVision/react-native-mercadopago-px',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BlackBox Vision`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
    '@docusaurus/plugin-google-gtag'
  ],
};

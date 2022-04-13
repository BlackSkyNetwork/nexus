// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Black Sky Nexus',
  tagline: 'A Resource For Minimizing Dystopia',
  url: 'https://nexus.blacksky.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'BlackSkyNetwork', // Usually your GitHub org/user name.
  projectName: 'nexus', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'main',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          breadcrumbs: false,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/BlackSkyNetwork/nexus/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Nexus',
        logo: {
          alt: 'Black Sky logo',
          src: 'img/logo.svg',
        },
        items: [
          //{to: '/nexus/zine/', label: 'Zine', position: 'left'},
          //{to: '/nexus/wiki/intro', label: 'Wiki', position: 'left'},
          //{
          //  href: 'https://github.com/BlackSkyNetwork',
          //  label: 'GitHub',
          //  position: 'right',
          //},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Black Sky Nexus • ${new Date().getFullYear()} • Written content licensed <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> unless otherwise noted`,
      },
    }),
};

module.exports = config;
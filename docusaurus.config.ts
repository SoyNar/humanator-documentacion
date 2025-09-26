import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Humanator Documentacion',
  tagline: 'Humanator',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://github.com/SoyNar',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],


  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Humanator Documentacion',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
   footer: {
  style: 'dark',
  links: [
    {
      title: 'Documentación',
      items: [
        {
          label: 'Introducción',
          to: '/docs/01-introduccion',
        },
        {
          label: 'Alcance',
          to: '/docs/02-alcance',
        },
        {
          label: 'Requerimientos',
          to: '/docs/03-requerimientos-funcionales',
        },
      ],
    },
    {
      title: 'Comunidad',
      items: [
        {
          label: 'Soporte Interno',
          href: 'mailto:soporte@gc.com', // cambia al correo real
        },
        {
          label: 'QNodo',
          href: 'https://www.qnodo.com', // cambia si tienen web
        },
      ],
    },
    {
      title: 'Más',
      items: [
        {
          label: 'Noticias Internas',
          to: '/docs/07-comunicacion-interna',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/mi-org/humanator', // cambia al repo real
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Humanator — Sistema Automático de Gestión Humana.`,
},

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

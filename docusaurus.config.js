// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Donetick',
  tagline: 'Dinosaurs are cool!',
  favicon: 'img/favicon.ico',
  

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'donetick', // Usually your GitHub org/user name.
  projectName: 'donetick', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', 
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/donetick/docs',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg', 
      navbar: {
        title: 'Donetick',
        logo: {
          alt: 'Donetick Logo',
          src: 'img/logo.svg',

        },
        
        items: [
         
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'https://donetick.com',
            label: 'Website',
            position: 'left',

          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/donetick/donetick',
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
                label: 'Getting Started',
                to: '/getting-started',
              },
              {
                label: 'Notifications',
                to: '/category/notifications',
              },
              {
                label: 'Webhooks',
                to: '/advance-settings/webhooks',
              },
              {
                label: 'API',
                to: '/advance-settings/api',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github Discussion',
                href: 'https://github.com/donetick/donetick/discussions',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/6hSH6F33q7',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/donetick',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Release',
                href: 'https://github.com/donetick/donetick/releases/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/donetick/donetick',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Donetick. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

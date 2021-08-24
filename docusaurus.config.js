const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Open Metaverse Interoperability Group',
    tagline:
        'Bridging virtual worlds by designing and promoting protocols for identity, social graphs, inventory, and more.',
    url: 'https://omigroup.org',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'omigroup', // Usually your GitHub org/user name.
    projectName: 'website', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'OMI',
            logo: {
                alt: 'OMI logo',
                src: '/img/omi-logo.png',
            },
            items: [
                // {
                //   type: 'doc',
                //   docId: 'intro',
                //   position: 'left',
                //   label: 'Tutorial',
                // },
                // { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/omigroup/OMI',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    label: 'Discord',
                    href: 'https://discord.gg/NJtT9grz5E',
                    position: 'right',
                },
                {
                    label: 'Twitter',
                    href: 'https://twitter.com/open_metaverse',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                // {
                //   title: 'Docs',
                //   items: [
                //     {
                //       label: 'Tutorial',
                //       to: '/docs/intro',
                //     },
                //   ],
                // },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'GitHub Discussions',
                            href: 'https://github.com/omigroup/OMI/discussions',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/NJtT9grz5E',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/open_metaverse',
                        },
                        {
                            label: 'Calendar',
                            href: 'https://calendar.google.com/calendar/u/1?cid=Y18wZHB1Z2Y5ZjgzZXE0cWVrbWI2b21xYmptZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        // {
                        //   label: 'Blog',
                        //   to: '/blog',
                        // },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/omigroup/OMI',
                        },
                        {
                            label: 'YouTube',
                            href: 'https://www.youtube.com/channel/UCB3huP95JrOTma5LfiDCd4A',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} OMI Group.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                pages: {
                },
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    showLastUpdateTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/omigroup/website/edit/main/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/omigroup/website/edit/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
}

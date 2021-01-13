module.exports = {
  siteMetadata: {
    title: 'Olly Nevard | Software Engineer',
    titleTemplate: '%s',
    description: 'The personal site of Olly Nevard',
    url: 'https://ollynevard.dev',
    image: '/images/logo_light_hex_maskable.png',
    twitterUsername: '@ollynevard',
  },
  plugins: [
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Olly Nevard',
        short_name: 'Olly Nevard',
        start_url: '/',
        background_color: '#2C292D',
        theme_color: '#FF6188',
        display: 'standalone',
        icon: 'static/images/logo_light_hex_maskable.png',
        icon_options: {
          purpose: 'any maskable',
        },
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/icons/*'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `ollynevard.dev`,
      },
    },
  ],
};

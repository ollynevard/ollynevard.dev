module.exports = {
  siteMetadata: {
    title: 'Olly Nevard | Software Engineer',
    titleTemplate: '%s',
    description: 'The personal site of Olly Nevard',
    url: 'https://ollynevard.dev',
    image: '/images/logo.png',
    twitterUsername: '@ollynevard',
  },
  plugins: [
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
  ],
};

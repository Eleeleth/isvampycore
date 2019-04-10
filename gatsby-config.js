module.exports = {
  siteMetadata: {
    title: `Is Vampy Core?`,
    description: `Answering the real questions...`,
    author: `@eleeleth`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `isvampycore`,
        short_name: `isvampycore`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/vampy.png`, // This path is relative to the root of the site.
      },
    }
  ],
}

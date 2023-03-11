module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `deepBlu-ocean/src/site/notes`,
        rootNote: `/home`,
      },
    },
    `gatsby-plugin-netlify`
  ],
  siteMetadata: {
    title: process.env.SITE_NAME,
  },
}

module.exports = {
  plugins: [
    {
      resolve: `deepBlu-ocean`,
      options: {
        contentPath: `${__dirname}/src/site/notes`,
        rootNote: `/home`,
      },
    },
    `gatsby-plugin-netlify`
  ],
  siteMetadata: {
    title: 'deepBlu-ocean',
  },
}

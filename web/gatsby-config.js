module.exports = {
  siteMetadata: {
    title: `Joseph Maramba | Portfolio`,
    siteUrl: `https://www.josephmaramba.tech`,
    description: `My Frontend developer portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `inm1xupw`,
        dataset: `production`,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
};

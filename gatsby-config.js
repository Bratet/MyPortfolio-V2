module.exports = {
  siteMetadata: {
    title: "Ahmed Mrabet",
  },
  plugins: ["gatsby-plugin-gatsby-cloud"],
  plugins: ["gatsby-plugin-postcss","gatsby-plugin-dark-mode",   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}/src/assets/`,
    },
  },],
};

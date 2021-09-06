const siteAddress = new URL("https://website.org");

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `website.org`,
    description: `None`,
    author: `website`,
    siteUrl:
      activeEnv === "development"
        ? "http://localhost:8008"
        : `https://website.org`,
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: false,
    DEV_SSR: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false,
    LMDB_STORE: false,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-exclude",
      options: {
        paths: ["/*/LICENSE", "/templates/*", "/*/ItemView", "/*/ListView"],
      },
    },
    "gatsby-remark-autolink-headers",
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        outputPath: `../types/gatsby-graphql.d.ts`,
        includeResolvers: true,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
    },

    `gatsby-plugin-next-seo`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-json`,
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludeRegex: /^(#)/,
      },
    },

  ],
};

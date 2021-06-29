require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    siteTitle: `Dongxuan Zhu`,
    // Default title of the page
    siteTitleAlt: `Dongxuan Zhu -@dongxuanzhu`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Dongxuan Zhu Portfolio`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://www.dongxuanzhu.com`,
    // Used for SEO
    siteDescription: `Dongxuan Zhu portfolio - Landscape Architect. Urban Technologist.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@dongxuanzhu`,
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
      {
      resolve: `@lekoarts/gatsby-theme-emma`,
      // See the theme's README for all available options
      options: {},
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },

       `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dongxuan Zhu`,
        short_name: `Dongxuan Zhu`,
        description: `Dongxuan Zhu Portfolio - Landscape Architect.Urban Technologist.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#b83280`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-gifs',
          'gatsby-remark-static-images',
                  // gatsby-remark-relative-images-v2 must
          // go before gatsby-remark-images
        ],
      },
    },
    
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          gatsbyRemarkPlugins: [

              {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 800,
              },
            },
            'gatsby-remark-gifs',
            'gatsby-remark-static-images',
          ],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/projects`,
        },
      },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
  pathPrefix: "/reponame",
  
}

module.exports = {
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      options: {
        name: 'meetup',
        path: `${__dirname}/content/meetup`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'assets',
        path: `${__dirname}/content/assets`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        plugins: [
          {
            options: {
              maxWidth: 590,
            },
            resolve: 'gatsby-remark-images',
          },
          {
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        //trackingId: 'ADD YOUR TRACKING ID HERE',
      },
      resolve: 'gatsby-plugin-google-analytics',
    },
    'gatsby-plugin-feed',
    {
      options: {
        background_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png',
        name: 'Recruiterz study meetups',
        short_name: 'Recruiterz',
        start_url: '/',
        theme_color: '#663399',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-native-web',
    {
      options: {
        omitGoogleFont: false,
        pathToConfigModule: 'src/utils/typography',
      },
      resolve: 'gatsby-plugin-typography',
    },
  ],
  siteMetadata: {
    author: 'recruiterz',
    description: 'Recruiterz weekly meetup records.',
    siteUrl: 'https://recruiterz.netlify.com/',
    social: {
      twitter: '',
    },
    title: 'Recruiterz study meetups',
  },
};

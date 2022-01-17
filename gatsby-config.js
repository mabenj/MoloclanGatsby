module.exports = {
	siteMetadata: {
		title: `MOLO Clan`,
		description: `MOLO Clan viralliset kotisivut. Älä tuu kurkistelee.`,
		author: `@mabenj`
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-transformer-json`,
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `MOLO Clan`,
				short_name: `MOLO`,
				start_url: `/`,
				background_color: `#ffffff`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/img/favicon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/img/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `videos`,
				path: `${__dirname}/src/video/`
			}
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-smoothscroll`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `${process.env.GA_TRACKING_ID}`
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};

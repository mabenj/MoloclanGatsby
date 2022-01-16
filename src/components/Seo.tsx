import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
function SEO({
	description = "",
	lang = "fi",
	meta = [],
	title = ""
}: {
	description?: string;
	lang?: string;
	meta?: React.DetailedHTMLProps<
		React.MetaHTMLAttributes<HTMLMetaElement>,
		HTMLMetaElement
	>[];
	title?: string;
}) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const defaultTitle = site.siteMetadata?.title;
	const metaArray:
		| React.DetailedHTMLProps<
				React.MetaHTMLAttributes<HTMLMetaElement>,
				HTMLMetaElement
		  >[]
		| undefined = [
		{
			name: "description",
			content: metaDescription
		},
		{
			property: `og:title`,
			content: title || defaultTitle
		},
		{
			property: `og:description`,
			content: metaDescription
		},
		{
			property: `og:type`,
			content: `website`
		},
		{
			name: `twitter:card`,
			content: `summary`
		},
		{
			name: `twitter:creator`,
			content: site.siteMetadata?.author || ``
		},
		{
			name: `twitter:title`,
			content: title || defaultTitle
		},
		{
			name: `twitter:description`,
			content: metaDescription
		},
		{
			name: "og:image",
			content: "https://i.imgur.com/yOJICaM.jpg"
		},
		{
			name: "og:url",
			content: "https://moloclan.fi"
		},
		{
			name: "og:site_name",
			content: "MOLO Clan kotisivut"
		},
		{
			name: "og:video",
			content: "https://www.youtube.com/watch?v=7hnuWwWI3Cc"
		},
		{
			name: "og:locale",
			content: "fi_FI"
		},
		...meta
	];

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title || defaultTitle}
			titleTemplate={title && defaultTitle ? `${defaultTitle} | %s` : undefined}
			meta={metaArray}
		/>
	);
}

export default SEO;

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HOVER_ZOOM_SCALE = 1.1;

const MinecraftMap = ({ mapUrl }: { mapUrl: string }) => {
	const [isHovering, setIsHovering] = useState(false);
	const { miscImagesJson } = useStaticQuery(graphql`
		query {
			miscImagesJson(image: { name: { eq: "molocraft_dynmap" } }) {
				image {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
					}
				}
				description
			}
		}
	`);

	const image = getImage(miscImagesJson.image);

	const mapImageStyle: React.CSSProperties = {
		transform: isHovering ? `scale(${HOVER_ZOOM_SCALE})` : "scale(1)",
		transition: "all 200ms ease"
	};

	const imageContainerStyle: React.CSSProperties = {
		overflow: "hidden"
	};

	return (
		<a href={mapUrl} target="_blank" rel="noreferrer">
			<div className="rounded" style={imageContainerStyle}>
				<div style={mapImageStyle} className="img-fluid">
					{image && (
						<GatsbyImage
							image={image}
							alt={miscImagesJson.description}
							onMouseEnter={() => setIsHovering(true)}
							onMouseLeave={() => setIsHovering(false)}
						/>
					)}
				</div>
			</div>
		</a>
	);
};

export default MinecraftMap;

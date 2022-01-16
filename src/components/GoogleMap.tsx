import React from "react";
import GoogleMapReact, { Coords } from "google-map-react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const mapContainerStyle: React.CSSProperties = {
	height: "100%",
	width: "100%"
};

const Map = () => {
	const defaultCenter: Coords = {
		lat: 61.3329,
		lng: 23.7621
	};
	const defaultZoom = 12;
	const marker1Pos: Coords = {
		lat: 61.3268,
		lng: 23.7465
	};
	const marker2Pos: Coords = {
		lat: 61.3236,
		lng: 23.7618
	};

	return (
		<div style={mapContainerStyle}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.GATSBY_MAPS_API_KEY || "" }}
				defaultCenter={defaultCenter}
				defaultZoom={defaultZoom}>
				<Marker
					lat={marker1Pos.lat}
					lng={marker1Pos.lng}
					title="Pääkonttori on tässä"
				/>
				<Marker
					lat={marker2Pos.lat}
					lng={marker2Pos.lng}
					title="Haarakonttori on tässä"
				/>
			</GoogleMapReact>
		</div>
	);
};

const Marker = ({ title }: { title: string; lat: number; lng: number }) => {
	const { file } = useStaticQuery(graphql`
		query {
			file(name: { eq: "favicon" }) {
				childImageSharp {
					gatsbyImageData(
						placeholder: BLURRED
						width: 40
						layout: FIXED
						formats: PNG
					)
				}
			}
		}
	`);
	const image = getImage(file);
	const imageStyle: React.CSSProperties = {
		transform: "translate3d(-50%, -50%, 0)",
		width: "40px"
	};
	return (
		<div style={imageStyle}>
			{image && <GatsbyImage image={image} alt={title} title={title} />}
		</div>
	);
};

export default Map;

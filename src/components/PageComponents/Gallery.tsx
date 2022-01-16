import React from "react";
import Wrapper from "../../components/Wrapper";
import GallerySection, {
	IGallerySectionProps
} from "../../components/Gallery/GallerySection";
import { ListGroup } from "react-bootstrap";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { scrollToElementSmooth } from "../../Utils";
import { Button } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, ImageDataLike } from "gatsby-plugin-image";
import IMediaSource from "../../MediaSources/IMediaSource";

const headerStyle: React.CSSProperties = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center"
};

type QueryType = {
	allGalleryImagesJson: {
		nodes: QueryNode[];
	};
};

type QueryNode = {
	category: string;
	id: string;
	description: string;
	image: ImageDataLike & {
		childImageSharp: {
			original: {
				width: number;
				height: number;
			};
		};
	};
};

export default function Gallery() {
	const { width } = useWindowDimensions();
	const isMobile = width < 768;
	const { allGalleryImagesJson } = useStaticQuery<QueryType>(graphql`
		query {
			allGalleryImagesJson {
				nodes {
					category
					id
					description
					image {
						childImageSharp {
							gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
							original {
								height
								width
							}
						}
					}
				}
			}
		}
	`);
	console.log(allGalleryImagesJson);
	const rustImages = formatMediaSource(
		allGalleryImagesJson.nodes.filter((node) => node.category === "rust")
	);
	const photoshopImages = formatMediaSource(
		allGalleryImagesJson.nodes.filter((node) => node.category === "photoshop")
	);
	const screenshotImages = formatMediaSource(
		allGalleryImagesJson.nodes.filter((node) => node.category === "screenshots")
	);
	const sections: IGallerySectionProps[] = [
		{
			header: "Rust-häröilyt",
			id: "rust",
			media: rustImages,
			direction: "row"
		},
		{
			header: "Paint-teokset",
			id: "photoshop",
			media: photoshopImages,
			direction: "row"
		},
		{
			header: "8k Screenshotteja",
			id: "screenshots",
			media: screenshotImages,
			direction: "row"
		}
		// {
		// 	header: "MOLO TV",
		// 	id: "mtv",
		// 	media: videosMedia,
		// 	direction: "column"
		// }
	];
	return (
		<>
			<Wrapper>
				{isMobile ? (
					<MobileHeader sections={sections} />
				) : (
					<DesktopHeader sections={sections} />
				)}
			</Wrapper>
			{sections.map((section) => (
				<Wrapper key={section.id}>
					<GallerySection {...section} />
				</Wrapper>
			))}
		</>
	);
}

const DesktopHeader = ({ sections }: { sections: IGallerySectionProps[] }) => {
	return (
		<>
			<div style={headerStyle}>
				<h1 className="border-0 mb-4">Galleria</h1>
				<ul className="list-inline">
					{sections.map((section) => (
						<li key={section.id} className="list-inline-item px-3">
							<Button
								as="a"
								variant=""
								className="text-decoration-none orange-color orange-color-hover"
								onClick={() => scrollToElementSmooth(`#${section.id}`)}>
								{section.header}
							</Button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

const MobileHeader = ({ sections }: { sections: IGallerySectionProps[] }) => {
	return (
		<>
			{" "}
			<h1>Galleria</h1>
			<ListGroup variant="flush">
				{sections.map((section) => (
					<ListGroup.Item
						key={section.id}
						action
						className="gallery-section-list-item">
						<Button
							as="a"
							variant=""
							className="text-decoration-none orange-color orange-color-hover"
							onClick={() => scrollToElementSmooth(`#${section.id}`)}>
							{section.header}
						</Button>
					</ListGroup.Item>
				))}
			</ListGroup>
		</>
	);
};

const formatMediaSource = (
	nodes: QueryNode[],
	type: "video" | "image" | "youtube" = "image"
): IMediaSource[] => {
	return nodes.map((node) => {
		const media: IMediaSource = {
			desc: node.description,
			id: node.id,
			type: type,
			gatsbyImage: getImage(node.image),
			width: node.image.childImageSharp.original.width,
			height: node.image.childImageSharp.original.height
		};
		return media;
	});
};

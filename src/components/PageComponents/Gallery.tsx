import React from "react";
import Wrapper from "../../components/Wrapper";
import GallerySection, {
	IGallerySectionProps
} from "../../components/Gallery/GallerySection";
import { ListGroup } from "react-bootstrap";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getImgurUrl, getYoutubeUrl, scrollToElementSmooth } from "../../Utils";
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
		nodes: ImageNode[];
	};
	allGalleryVideosJson: {
		nodes: VideoNode[];
	};
};

type ImageNode = {
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

type VideoNode = {
	id: string;
	height: number;
	description: string;
	width: number;
	type: "video" | "youtube";
	videoId: string;
	posterImage?: ImageDataLike;
};

export default function Gallery() {
	const { width } = useWindowDimensions();
	const isMobile = width < 768;
	const { allGalleryImagesJson, allGalleryVideosJson } =
		useStaticQuery<QueryType>(graphql`
			query {
				allGalleryImagesJson {
					nodes {
						category
						id
						description
						image {
							childImageSharp {
								gatsbyImageData(
									placeholder: BLURRED
									layout: CONSTRAINED
									quality: 90
								)
								original {
									height
									width
								}
							}
						}
					}
				}
				allGalleryVideosJson {
					nodes {
						id
						height
						description
						width
						type
						videoId
						posterImage {
							childImageSharp {
								gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
							}
						}
					}
				}
			}
		`);
	const rustImages = formatImages(
		allGalleryImagesJson.nodes.filter((node) => node.category === "rust")
	);
	const photoshopImages = formatImages(
		allGalleryImagesJson.nodes.filter((node) => node.category === "photoshop")
	);
	const screenshotImages = formatImages(
		allGalleryImagesJson.nodes.filter((node) => node.category === "screenshots")
	);
	const videos = formatVideos(allGalleryVideosJson.nodes);
	const sections: IGallerySectionProps[] = [
		{
			header: "Rust-h??r??ilyt",
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
		},
		{
			header: "MOLO TV",
			id: "mtv",
			media: videos,
			direction: "column"
		}
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

const formatImages = (nodes: ImageNode[]): IMediaSource[] => {
	return nodes.map((node) => {
		const media: IMediaSource = {
			desc: node.description,
			id: node.id,
			type: "image",
			gatsbyImage: getImage(node.image),
			width: node.image.childImageSharp.original.width,
			height: node.image.childImageSharp.original.height
		};
		return media;
	});
};
function formatVideos(nodes: VideoNode[]): IMediaSource[] {
	return nodes.map((node) => {
		const media: IMediaSource = {
			desc: node.description,
			id: node.id,
			type: node.type,
			width: node.width,
			height: node.height,
			videoSrc:
				node.type === "video"
					? getImgurUrl(node.videoId, "", ".mp4")
					: getYoutubeUrl(node.videoId),
			poster: node.posterImage && getImage(node.posterImage)
		};
		return media;
	});
}

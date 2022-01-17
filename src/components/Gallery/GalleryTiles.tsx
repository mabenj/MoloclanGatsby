import React from "react";
import Gallery, {
	PhotoClickHandler,
	RenderImageProps,
	PhotoProps
} from "react-photo-gallery";
import MediaComponent, { IMediaComponentProps } from "./MediaComponent";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getYoutubeUrl } from "../../Utils";
import { useEffect } from "react";
import IMediaSource from "../../MediaSources/IMediaSource";
import { IGatsbyImageData } from "gatsby-plugin-image";

const MOBILE_BREAKPOINT = 768;

interface IGalleryTilesProps {
	sourceImages: IMediaSource[];
	onClick: PhotoClickHandler<{}>;
	direction: "row" | "column";
	youtubeAsIframe?: boolean;
	onLoad: () => void;
}

const GalleryTiles = ({
	sourceImages,
	onClick,
	direction,
	onLoad
}: IGalleryTilesProps) => {
	const { width: windowWidth } = useWindowDimensions();
	const isMobile = windowWidth < MOBILE_BREAKPOINT;

	useEffect(() => {
		setTimeout(onLoad, 50);
	}, [onLoad]);

	return (
		<Gallery
			photos={formatGalleryMedia(sourceImages)}
			margin={direction === "column" ? 10 : 3}
			renderImage={RenderImage}
			onClick={onClick}
			direction={direction}
			columns={isMobile ? 1 : 2}
		/>
	);
};

type CustomRenderImageProps = {
	id?: string;
	type?: IMediaComponentProps["type"];
	poster?: IGatsbyImageData;
	gatsbyImage?: IGatsbyImageData;
};

const RenderImage = <T extends CustomRenderImageProps>({
	margin,
	index,
	photo,
	onClick,
	direction,
	top,
	left
}: RenderImageProps<T>) => {
	const props: IMediaComponentProps = {
		src: photo.src,
		gatsbyImage: photo.gatsbyImage,
		poster: photo.poster,
		desc: photo.alt || "",
		width: photo.width,
		height: photo.height,
		id: photo.id || photo.key || photo.src,
		type: photo.type || "image",
		onClick: (e) => onClick && onClick(e, { index }),
		direction: direction,
		style: { margin, top, left }
	};
	return <MediaComponent key={photo.key} {...props} />;
};

const formatGalleryMedia = (
	mediaSources: IMediaSource[]
): PhotoProps<CustomRenderImageProps>[] => {
	return mediaSources.map((media) => {
		let galleryPhoto: PhotoProps<CustomRenderImageProps> = {
			// CustomRenderImageProps
			id: media.id,
			type: media.type,
			poster: media.poster,
			gatsbyImage: media.gatsbyImage,

			// PhotoProps
			src: "",
			width: media.width,
			height: media.height,
			alt: media.desc,
			key: media.id + media.desc
		};
		if (media.type === "youtube" || media.type === "video") {
			galleryPhoto.src = media.videoSrc || "";
		}
		return galleryPhoto;
	});
};

export default GalleryTiles;

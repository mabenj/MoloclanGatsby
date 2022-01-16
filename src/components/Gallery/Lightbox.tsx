import React from "react";
import FsLightbox from "fslightbox-react";
import { getYoutubeUrl } from "../../Utils";
import { isOpera, isEdge, isChrome, isChromium } from "react-device-detect";
import IMediaSource from "../../MediaSources/IMediaSource";
import { GatsbyImage } from "gatsby-plugin-image";

const HAS_BACKDROP_FILTER_BUG = isOpera || isEdge || isChrome || isChromium;

interface ILightboxProps {
	toggler: boolean;
	sourceMedias: IMediaSource[];
	index: number;
	customSourceNodes?: JSX.Element[] | undefined;
}

const Lightbox = ({ toggler, sourceMedias, index }: ILightboxProps) => {
	return (
		<FsLightbox
			toggler={toggler}
			sources={formatLightboxmMedia(sourceMedias)}
			sourceIndex={index}
			onClose={HAS_BACKDROP_FILTER_BUG ? addBackDropBlur : undefined}
			onOpen={HAS_BACKDROP_FILTER_BUG ? hideBackDropBlur : undefined}
			exitFullscreenOnClose
		/>
	);
};

const formatLightboxmMedia = (mediaSources: IMediaSource[]): JSX.Element[] => {
	return mediaSources.map((media) => {
		if (media.type === "youtube") {
			return (
				<iframe
					src={getYoutubeUrl(media.id)}
					title={media.desc}
					width="1920px"
					height="1080px"
					frameBorder="0"
					allow="autoplay; fullscreen"
					allowFullScreen
				/>
			);
		}
		return (
			<div>
				{media.gatsbyImage && (
					<GatsbyImage image={media.gatsbyImage} alt={media.desc} />
				)}
			</div>
		);
	});
};

function addBackDropBlur() {
	const wrappers = document.querySelectorAll<HTMLDivElement>(".wrapper");
	wrappers.forEach((wrapper) => {
		wrapper.className += " back-blur";
	});
}

function hideBackDropBlur() {
	const wrappers = document.querySelectorAll<HTMLDivElement>(".wrapper");
	wrappers.forEach((wrapper) => {
		wrapper.classList.remove("back-blur");
	});
}

export default Lightbox;

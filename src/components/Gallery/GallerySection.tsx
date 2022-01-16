import React from "react";
import { useState } from "react";
import Lightbox from "./Lightbox";
import useLightbox from "../../hooks/useLightbox";
import GalleryTiles from "./GalleryTiles";
import IMediaSource from "../../MediaSources/IMediaSource";

export interface IGallerySectionProps extends React.HTMLAttributes<any> {
	media: IMediaSource[];
	direction?: "row" | "column";
	header?: string;
}

const GallerySection = ({
	media,
	direction = "row",
	header,
	id
}: IGallerySectionProps) => {
	const [lightboxToggler, lightboxIndex, openLightbox] = useLightbox();
	const [loading, setLoading] = useState(true);

	return (
		<div className="mt-2" id={loading ? undefined : id}>
			{header ? <h3 className="mb-4">{header}</h3> : null}
			<GalleryTiles
				sourceImages={media}
				onClick={(_, { index }) => openLightbox(index)}
				direction={direction}
				onLoad={() => setLoading(false)}
			/>
			<Lightbox
				toggler={lightboxToggler}
				index={lightboxIndex}
				sourceMedias={media}
			/>
		</div>
	);
};

export default GallerySection;

import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import Tilty from "react-tilty";
import IMediaSource from "../../MediaSources/IMediaSource";

export interface IMediaComponentProps extends IMediaSource {
	src: string;
	direction: "row" | "column";
	style?: React.CSSProperties;
	onClick?: (event: React.MouseEvent) => void | null;
}

const MediaComponent = (props: IMediaComponentProps) => {
	const baseStyle: React.CSSProperties = {
		width: props.width,
		height: props.height,
		margin: props.style?.margin,
		position: props.direction === "column" ? "absolute" : "initial",
		left: props.direction === "column" ? props.style?.left : "initial",
		top: props.direction === "column" ? props.style?.top : "initial"
	};

	switch (props.type) {
		case "video": {
			return <MediaVideo {...props} style={baseStyle} />;
		}
		case "image": {
			return <MediaTiltableImage {...props} style={baseStyle} />;
		}
		case "youtube": {
			return <MediaIframe {...props} style={baseStyle} />;
		}
		default:
			throw Error(`Not supported media type: ${props.type}`);
	}
};

const MediaVideo = (props: IMediaComponentProps) => {
	const [captionVisible, setCaptionVisible] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.onplay = () => setTimeout(hideCaption, 500);
			videoRef.current.onpause = showCaption;
			videoRef.current.onmouseenter = showCaption;
			videoRef.current.onmouseleave = hideCaption;
		}
	}, []);

	const showCaption = () => {
		setCaptionVisible(true);
	};

	const hideCaption = () => {
		if (videoRef.current?.paused) {
			return;
		}
		setCaptionVisible(false);
	};

	const captionStyle: React.CSSProperties = {
		opacity: captionVisible ? 1 : 0,
		margin: parseInt(props.style?.margin?.toString() || "0") + 10,
		position: props.style?.position,
		left: props.style?.left,
		top: props.style?.top
	};
	return (
		<>
			<video
				ref={videoRef}
				controls
				poster={(props.poster && getSrc(props.poster)) || ""}
				style={props.style}>
				<source src={props.src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="gallery-video-caption" style={captionStyle}>
				{props.desc}
			</div>
		</>
	);
};

const MediaTiltableImage = (props: IMediaComponentProps) => {
	if (!props.gatsbyImage) {
		return null;
	}
	return (
		<Tilty max={25} perspective={1500} speed={1000} className="gallery-tilty">
			<div onClick={props.onClick} style={props.style}>
				<GatsbyImage image={props.gatsbyImage} alt={props.desc} />
			</div>
			<div className="gallery-tilty-inner">{props.desc}</div>
		</Tilty>
	);
};

const MediaIframe = (props: IMediaComponentProps) => {
	const iFrameStyle: React.CSSProperties = Object.assign(
		{ border: 0 },
		props.style
	);
	return (
		<iframe
			src={props.src}
			title={props.desc}
			style={iFrameStyle}
			allowFullScreen
		/>
	);
};

export default MediaComponent;

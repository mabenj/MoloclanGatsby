import { IGatsbyImageData } from "gatsby-plugin-image";

export default interface IMediaSource {
	id: string;
	desc: string;
	width: number;
	height: number;
	type: "video" | "youtube" | "image";
	videoSrc?: string;
	gatsbyImage?: IGatsbyImageData | undefined;
	poster?: IGatsbyImageData | undefined;
}

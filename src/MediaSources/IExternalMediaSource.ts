export default interface IExternalMediaSource {
	id: string;
	desc: string;
	width: number;
	height: number;
	type: "video" | "image" | "youtube";
	posterSrcId?: "string";
}

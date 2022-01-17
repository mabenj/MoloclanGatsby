import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import chickenImageSources from "../MediaSources/flying-chicken-sources.json";
import Toggle from "react-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getImgurUrl } from "../Utils";
import { graphql, useStaticQuery } from "gatsby";
import {
	GatsbyImage,
	getImage,
	getSrc,
	IGatsbyImageData
} from "gatsby-plugin-image";

const FPS = 60;

interface IChickenImage {
	width: number;
	height: number;
	alt: string;
	src: string;
}

const chickenImages: IChickenImage[] = [];

const Chicken = ({ style }: { style?: React.CSSProperties }) => {
	const [isFlying, setIsFlying] = useState(false);
	const { allChickenImagesJson } = useStaticQuery(graphql`
		query {
			allChickenImagesJson {
				nodes {
					description
					image {
						childImageSharp {
							gatsbyImageData(placeholder: BLURRED, layout: FIXED)
							original {
								width
								height
							}
						}
					}
				}
			}
		}
	`);

	useEffect(() => {
		allChickenImagesJson.nodes.forEach((node: any) => {
			const imgSrc = getSrc(node.image);
			if (!imgSrc) return;
			const image: IChickenImage = {
				src: imgSrc,
				width: node.image.childImageSharp.original.width,
				height: node.image.childImageSharp.original.height,
				alt: node.description
			};
			chickenImages.push(image);
		});
	}, []);

	return (
		<div style={style}>
			<div className="orange-toggle">
				<Toggle
					checked={isFlying}
					onChange={(e) => setIsFlying(e.target.checked)}
					className="orange-toggle"
					icons={{
						checked: <FontAwesomeIcon className="pb-1" icon="drumstick-bite" />,
						unchecked: null
					}}
				/>
			</div>
			{chickenImages.length > 0 && <ChickenImg isFlying={isFlying} />}
		</div>
	);
};

interface IChickenPositionData {
	maxX: number;
	maxY: number;
	currentX: number;
	currentY: number;
	directionX: "west" | "east";
	directionY: "north" | "south";
}

const ChickenImg = ({ isFlying }: { isFlying: boolean }) => {
	const [currentChicken, setCurrentChicken] = useState<IChickenImage>(
		chickenImages[0]
	);
	const [positionData, setPositionData] = useState<IChickenPositionData>({
		maxX: 0,
		maxY: 0,
		currentX: 0,
		currentY: 0,
		directionX: Math.random() > 0.5 ? "west" : "east",
		directionY: Math.random() > 0.5 ? "north" : "south"
	});

	const fpsInterval = useRef(1000 / FPS);
	const then = useRef(
		typeof window !== "undefined" ? window.performance.now() : -1
	);
	const paused = useRef(!isFlying);

	const STEP = 3;

	useEffect(() => {
		const chicken =
			chickenImages[Math.floor(Math.random() * chickenImages.length)];
		const maxWidth = window.innerWidth - currentChicken.width;
		const maxHeight = window.innerHeight - currentChicken.height;
		setPositionData((prev) => ({
			...prev,
			maxX: maxWidth,
			maxY: maxHeight,
			currentX: Math.random() * maxWidth,
			currentY: Math.random() * maxHeight
		}));
		setCurrentChicken(chicken);
		window.addEventListener("resize", () => updateMaxXY());
		return () => {
			window.removeEventListener("resize", () => updateMaxXY());
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const animate = (newTime: number) => {
		if (paused.current) {
			return;
		}

		requestAnimationFrame(animate);

		const now = newTime;
		const elapsed = now - then.current;

		if (elapsed > fpsInterval.current) {
			then.current = now - (elapsed % fpsInterval.current);

			setPositionData((prev) => {
				let tempDirectionX = prev.directionX;
				let tempDirectionY = prev.directionY;
				let tempX = prev.currentX;
				let tempY = prev.currentY;

				if (tempX >= prev.maxX || tempX <= 0) {
					tempDirectionX = tempX <= 0 ? "east" : "west";
					updateChicken();
				}
				if (tempY >= prev.maxY || tempY <= 0) {
					tempDirectionY = tempY <= 0 ? "south" : "north";
					updateChicken();
				}

				return {
					...prev,
					currentX:
						tempDirectionX === "east"
							? prev.currentX + STEP
							: prev.currentX - STEP,
					currentY:
						tempDirectionY === "south"
							? prev.currentY + STEP
							: prev.currentY - STEP,
					directionX: tempDirectionX,
					directionY: tempDirectionY
				};
			});
		}
	};

	useLayoutEffect(() => {
		paused.current = !isFlying;
		let rafId = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(rafId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFlying]);

	const updateMaxXY = () => {
		const maxX = window.innerWidth - currentChicken.width;
		const maxY = window.innerHeight - currentChicken.height;
		setPositionData((prev) => ({ ...prev, maxX, maxY }));
	};

	const updateChicken = () => {
		setCurrentChicken((prev) => {
			let chicken =
				chickenImages[Math.floor(Math.random() * chickenImages.length)];
			while (chicken === prev) {
				chicken =
					chickenImages[Math.floor(Math.random() * chickenImages.length)];
			}
			const maxX = window.innerWidth - currentChicken.width;
			const maxY = window.innerHeight - currentChicken.height;
			setPositionData((prev) => ({ ...prev, maxX, maxY }));
			return chicken;
		});
	};

	const chickenStyle: React.CSSProperties = {
		display: isFlying ? "initial" : "none",
		transform: `translate3d(${positionData.currentX}px, ${positionData.currentY}px, 0)`,
		position: "fixed",
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		cursor: "not-allowed"
	};

	return (
		<img
			src={currentChicken.src}
			alt={currentChicken.alt}
			style={chickenStyle}
		/>
	);
};

export default Chicken;

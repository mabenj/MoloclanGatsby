import React from "react";
import { useState, useEffect } from "react";
import minecraftService, { IPlayer } from "../../services/minecraftService";
import { getImgurUrl } from "../../Utils";

import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import GatsbyBgImage from "gatsby-background-image";

import "../../styles/mc.scss";
import "../../styles/lds.scss";

import { graphql, useStaticQuery } from "gatsby";

const BG_IMAGE_ID = "gbizRgN";
const BG_IMAGE = getImgurUrl(BG_IMAGE_ID, "", ".png");

const FALLBACK_FAVICON = "https://i.imgur.com/8XKJwE8t.jpg";

const AVATAR_WIDTH = 40;
const PLAYERS_TO_TAKE = 12;

const MinecraftCard = () => {
	const [players, setPlayers] = useState<IPlayer[]>([]);
	const [playerCount, setPlayerCount] = useState(0);
	const [isOffline, setIsOffline] = useState(false);
	const [favIcon, setFavIcon] = useState(FALLBACK_FAVICON);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchServerInfo(): Promise<void> {
			const { isOnline, players, playerCount, favIcon } =
				await minecraftService.getServerInfo(PLAYERS_TO_TAKE, AVATAR_WIDTH);
			setPlayers(players);
			setPlayerCount(playerCount);
			setIsOffline(!isOnline);
			setFavIcon((prev) => favIcon || prev);
			setIsLoading(false);
		}
		fetchServerInfo();
	}, []);

	return (
		<Container>
			<BackgroundContainer>
				<BackgroundImage />
				<Title favIcon={favIcon} isLoading={isLoading} />
			</BackgroundContainer>
			<PlayerList
				players={players}
				totalPlayerCount={playerCount}
				isOffline={isOffline}
				isLoading={isLoading}
			/>
		</Container>
	);
};

export default MinecraftCard;

const Container = ({ children }: { children?: React.ReactNode }) => {
	return <div children={children} className="rounded mc-container" />;
};

const BackgroundContainer = ({ children }: { children?: React.ReactNode }) => {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		// window.open(BG_IMAGE, "_blank");
	};

	return (
		<div
			onClick={handleClick}
			children={children}
			className="mc-bg-container"></div>
	);
};

const BackgroundImage = () => {
	const { miscImagesJson } = useStaticQuery(graphql`
		query {
			miscImagesJson(image: { name: { eq: "molocraft_render" } }) {
				image {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
					}
				}
			}
		}
	`);
	const image = getImage(miscImagesJson.image);
	const bgImage = convertToBgImage(image);
	return <GatsbyBgImage Tag="section" {...bgImage} className="mc-bg-image" />;
};

const Title = ({
	favIcon,
	isLoading
}: {
	favIcon: string;
	isLoading: boolean;
}) => {
	return (
		<span className={"mc-title"}>
			<h4 className="ml-2">MOLOCRAFT</h4>
			<div
				className={`mc-fav-icon ${isLoading && "lds-ring"}`}
				style={{ backgroundImage: `url(${favIcon})` }}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</span>
	);
};

const PlayerList = ({
	players,
	totalPlayerCount,
	isOffline,
	isLoading
}: {
	players: IPlayer[];
	totalPlayerCount: number;
	isOffline: boolean;
	isLoading: boolean;
}) => {
	return (
		<div className="mc-playerlist">
			<StatusText
				isOffline={isOffline}
				playerCount={totalPlayerCount}
				className="mc-playerlist-status"
				isLoading={isLoading}
			/>
			<div className="mc-playerlist-players">
				{isLoading ? (
					<div className="lds-ellipsis">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				) : (
					<>
						{players.map(({ name, skinSource }) => (
							<span key={name} title={name}>
								<img src={skinSource} alt={name} width={AVATAR_WIDTH} />
								<p className="d-block text-break text-center">{name}</p>
							</span>
						))}
						{players.length === 0 && (
							<small className="text-muted">
								<em>Hiljast o...</em>
							</small>
						)}
					</>
				)}
			</div>
		</div>
	);
};

const StatusText = ({
	isOffline,
	playerCount,
	className,
	isLoading
}: {
	isOffline: boolean;
	playerCount: number;
	isLoading: boolean;
	className?: string;
}) => {
	return (
		<h4 className={`ml-2 pt-2 ${className}`}>
			{isOffline ? (
				<span className="badge badge-danger badge-pill">
					Servu on rikki tai jtn
				</span>
			) : (
				<>
					<span className="align-bottom">Paikalla&nbsp;</span>
					<span className="badge badge-success badge-pill">
						{isLoading ? "..." : playerCount}
					</span>
				</>
			)}
		</h4>
	);
};

import React from "react";
import { Row, Col } from "react-bootstrap";
import MoloLogo from "../MoloLogo/MoloLogo";
import Wrapper from "../Wrapper";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

export default function Home() {
	const { memeImageJson, veysRyuImageJson } = useStaticQuery(graphql`
		query {
			memeImageJson: miscImagesJson(image: { name: { eq: "molo_meme" } }) {
				image {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED)
					}
				}
			}
			veysRyuImageJson: miscImagesJson(image: { name: { eq: "veys_ryu" } }) {
				image {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED)
					}
				}
			}
		}
	`);
	const memeImage = getImage(memeImageJson.image);
	const veysRyuImage = getImage(veysRyuImageJson.image);

	return (
		<>
			<MoloLogo />
			<Wrapper>
				<h1>MOLO Clan</h1>
				<p className="lead">Joukko keskittymishäiriöisiä pummeja</p>
				<p>
					MOLO on noin vuonna 2015 alkunsa saanut juutalais-kristillinen
					Rust-klaani. Pian perustamisen jälkeen klaani keräsi itselleen
					hyvinkin laajan pelaajakunnan (lue{" "}
					<em>
						<abbr
							className="initialism text-lowercase"
							title="lauma kiukkuisia videopelaajia">
							zerg
						</abbr>
					</em>
					) ja sen myötä kusipäisen klaanin maineen useimmilla palvelimilla,
					joilla he pelasivat. Kyseistä mainetta vahvisti muihin pelaajiin
					kohdistuva häikäilemätön
					<em> fleimaaminen</em> sekä lukuisat <em>offline-raid</em>
					-tyyppiset iskut, joista klaani parhaiten tunnettiin.
				</p>
				<p>
					Muita MOLO-klaanin signatuurimanöövereitä olivat muun muassa Kemisti
					Kergen viljelemät <em>Lazy Dick</em> -raidtornit, loottien
					piilottaminen <em>cupboard</em>-komeroihin, ylenpalttinen servulla
					päivystäminen sekä yleinen härvääminen palvelimen chatissa. Klaanin
					pelaajakunnan krooninen työttömyys mahdollisti myös kellon ympäri
					pelaamisen ja sen myötä aamuyön pikkutunneille sijoittuvien{" "}
					offline-raidien järjestämisen.
				</p>
				<FrontPageImage
					image={memeImage}
					alt="Roof camper by veys_ryu"
					caption="Kuvituskuva offline-raidista"
					className="my-5"
				/>

				<Row>
					<Col lg="7">
						<p>
							Sittemmin klaani on lopettanut toimintansa Rustin parissa ja
							nykyään jatkaa häröilyä TeamSpeak-palvelimen puolella. Palvelimen
							IP-osoitteen löydät <Link to="/servut">SERVUT</Link>-sivulta.
						</p>
						<p>
							Osa klaanin jäsenistöstä on jatkanut toimintaa perustamalla kehnoa
							menestystä nauttivan startup-markkinointiyrityksen:
							<em> Markkinarako Oy</em>. Yrityksen liikevaihto vuonna 2019 oli
							noin 5€.
						</p>
					</Col>
					<Col lg>
						<FrontPageImage
							image={veysRyuImage}
							alt="Roof camper by veys_ryu"
							caption={
								<>
									Kala Harri wipen viimeineisenä päivänä <br />- heinäkuu 2016,
									väritetty
								</>
							}
						/>
					</Col>
				</Row>
				{/* cSpell: enable */}
			</Wrapper>
		</>
	);
}

const FrontPageImage = ({
	image,
	alt,
	caption,
	className
}: {
	image: IGatsbyImageData | undefined;
	alt: string;
	caption: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}}
			className={className}>
			<figure>
				{image && (
					<GatsbyImage
						image={image}
						alt={alt}
						className="rounded front-page-image"
					/>
				)}
				<figcaption className="text-muted">{caption}</figcaption>
			</figure>
		</div>
	);
};

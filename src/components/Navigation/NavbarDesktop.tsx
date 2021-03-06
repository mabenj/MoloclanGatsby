import React from "react";
import { Row, Col, Nav, Navbar } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Chicken from "../Chicken";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";
import Link from "../Link";

import { ILinkDefinition } from "./Header";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const chickenStyle: React.CSSProperties = {
	position: "absolute",
	right: "40px",
	top: "-5px"
};

const NavbarDesktop = ({
	className,
	links,
	currentPath
}: {
	className: string;
	links: ILinkDefinition[];
	currentPath: string;
}) => {
	return (
		<Row className={`${className} fixed-top navigation-bar`}>
			<Col>
				<Sidebar className="d-none d-xl-block" />
			</Col>
			<Col md={9} xl={7}>
				<Navigation links={links} currentPath={currentPath} />
			</Col>
			<Col className="">
				<Chicken style={chickenStyle} />
			</Col>
		</Row>
	);
};

const Navigation = ({
	links,
	currentPath
}: {
	links: ILinkDefinition[];
	currentPath: string;
}) => {
	return (
		<div className="navigation-bar-middle">
			<Brand className="navigation-brand" />
			<NavigationLinks
				className="navigation-links d-none d-md-flex"
				links={links}
				currentPath={currentPath}
			/>
			<NavigationLinks
				className="navigation-links d-md-none flex-column"
				links={links}
				currentPath={currentPath}
			/>
		</div>
	);
};

const Brand = ({ className }: { className?: string }) => {
	const { file } = useStaticQuery(graphql`
		query {
			file(name: { eq: "favicon" }) {
				childImageSharp {
					gatsbyImageData(
						placeholder: BLURRED
						width: 35
						layout: FIXED
						formats: PNG
					)
				}
			}
		}
	`);
	const image = getImage(file);
	return (
		<Nav className={className}>
			<Link to="/" style={{ textDecoration: "none" }}>
				<Navbar.Brand className="navbar-brand">
					{image && <GatsbyImage image={image} alt="MOLO Clan logo" />}
					&nbsp;molo
				</Navbar.Brand>
			</Link>
		</Nav>
	);
};

const NavigationLinks = ({
	className,
	links,
	currentPath
}: {
	className: string;
	links: ILinkDefinition[];
	currentPath: string;
}) => {
	return (
		<Nav className={className}>
			{links.map((link) => (
				<NavigationLink
					key={link.to}
					linkDefinition={link}
					currentPath={currentPath}
				/>
			))}
		</Nav>
	);
};

const NavigationLink = ({
	linkDefinition,
	currentPath
}: {
	linkDefinition: ILinkDefinition;
	currentPath: string;
}) => {
	const { subLinks, displayName, to } = linkDefinition;
	const hasSubLinks = !!subLinks && subLinks.length > 0;
	const isActive =
		currentPath && currentPath.toLowerCase() === to.toLowerCase();
	return (
		<div className="dropdown">
			<Link
				activeClassName="active"
				to={to}
				className={`navigation-link dropdown-button`}
				partiallyActive={to !== "/"}>
				<span className="navigation-link-text">{displayName}</span>

				{hasSubLinks && (
					<FontAwesomeIcon
						className="navigation-link-caret"
						icon="caret-down"
					/>
				)}
			</Link>
			{hasSubLinks && (
				<div className="dropdown-content">
					<ul className="list-unstyled">
						{subLinks?.map(({ displayName, hash }, index) => (
							<li key={hash} className="hvr-bounce-to-right">
								<Link
									to={`${to}#${hash}`}
									className={index !== 0 ? "" : `first`}>
									{displayName}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default NavbarDesktop;

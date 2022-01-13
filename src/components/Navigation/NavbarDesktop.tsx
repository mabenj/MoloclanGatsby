import React from "react";
import { Row, Col, Nav, Navbar } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Chicken from "../Chicken";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as GatsbyLink } from "gatsby";

import { ILinkDefinition } from "./Header";

const chickenStyle: React.CSSProperties = {
	position: "absolute",
	right: "40px",
	top: "-5px"
};

const NavbarDesktop = ({
	className,
	links
}: {
	className: string;
	links: ILinkDefinition[];
}) => {
	return (
		<Row className={`${className} fixed-top navigation-bar`}>
			<Col>
				<Sidebar className="d-none d-xl-block" />
			</Col>
			<Col md={9} xl={7}>
				<Navigation links={links} />
			</Col>
			<Col className="">
				<Chicken style={chickenStyle} />
			</Col>
		</Row>
	);
};

const Navigation = ({ links }: { links: ILinkDefinition[] }) => {
	return (
		<div className="navigation-bar-middle">
			<Brand className="navigation-brand" />
			<Links className="navigation-links d-none d-md-flex" links={links} />
			<Links className="navigation-links d-md-none flex-column" links={links} />
		</div>
	);
};

const Brand = ({ className }: { className?: string }) => {
	return (
		<Nav className={className}>
			<GatsbyLink to="/">
				<Navbar.Brand className="navbar-brand">
					<img
						src="/favicon-96x96.png"
						width="35"
						height="35"
						className="d-inline-block"
						alt="MOLO clan logo"
					/>{" "}
					molo
				</Navbar.Brand>
			</GatsbyLink>
		</Nav>
	);
};

const Links = ({
	className,
	links
}: {
	className: string;
	links: ILinkDefinition[];
}) => {
	return (
		<Nav className={className}>
			{links.map((link) => (
				<Link key={link.to} {...link} />
			))}
		</Nav>
	);
};

const Link = ({ exact, to, displayName, subLinks }: ILinkDefinition) => {
	const hasSubLinks = !!subLinks && subLinks.length > 0;
	return (
		<div className="dropdown">
			<GatsbyLink to={to} className="navigation-link dropdown-button">
				<span className="navigation-link-text">{displayName}</span>

				{hasSubLinks ? (
					<FontAwesomeIcon
						className="navigation-link-caret"
						icon="caret-down"
					/>
				) : null}
			</GatsbyLink>
			{hasSubLinks ? (
				<div className="dropdown-content">
					<ul className="list-unstyled">
						{subLinks?.map(({ displayName, hash }, index) => (
							<li key={hash} className="hvr-bounce-to-right">
								<GatsbyLink
									to={`${to}#${hash}`}
									className={index !== 0 ? "" : `first`}>
									{displayName}
								</GatsbyLink>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</div>
	);
};

export default NavbarDesktop;

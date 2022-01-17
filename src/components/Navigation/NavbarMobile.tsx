import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";

import { CloseButton, HamburgerButton } from "../Buttons";
import { animateCSS } from "../../Utils";
import { ILinkDefinition } from "./Header";

import WeatherWidget from "../WeatherWidget";
import Chicken from "../Chicken";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Link from "../Link";

const NavbarMobile = ({
	className,
	links
}: {
	className: string;
	links: ILinkDefinition[];
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div
				className={`${className} d-flex flex-column fixed-top nav-bar-mobile nav-bar-mobile-${
					isOpen ? "opened" : "closed"
				}`}>
				<MobileHead
					isOpen={isOpen}
					setOpen={() => setIsOpen(true)}
					setClosed={() => setIsOpen(false)}
				/>
				{isOpen ? (
					<>
						<MobileToolbar />
						<MobileDropdown
							links={links}
							handleClick={() => setIsOpen(false)}
						/>
					</>
				) : null}
			</div>
		</>
	);
};

const MobileToolbar = () => {
	return (
		<span className="w-100 px-4 py-2 d-flex justify-content-between">
			<WeatherWidget />
			<Chicken />
		</span>
	);
};

const MobileHead = ({
	isOpen,
	setOpen,
	setClosed
}: {
	isOpen: boolean;
	setOpen: () => void;
	setClosed: () => void;
}) => {
	const openButtonId = "navbar-open-btn";
	const closeButtonId = "navbar-close-btn";

	const openNavbar = () => {
		setOpen();
		animateCSS(`#${closeButtonId}`, "flipInY");
	};

	const closeNavBar = () => {
		setClosed();
		animateCSS(`#${openButtonId}`, "flipInY");
	};
	return (
		<div className={`nav-bar-mobile-head`}>
			<Brand className="navigation-brand ml-4" />
			<span className="mr-4">
				<HamburgerButton
					id={openButtonId}
					onClick={openNavbar}
					style={{ display: isOpen ? "none" : "block" }}
				/>
				<CloseButton
					id={closeButtonId}
					onClick={closeNavBar}
					style={{ display: isOpen ? "block" : "none" }}
				/>
			</span>
		</div>
	);
};

const MobileDropdown = ({
	links,
	handleClick
}: {
	links: ILinkDefinition[];
	handleClick: () => void;
}) => {
	return (
		<div className="d-flex flex-column w-100">
			{links.map((link) => (
				<MobileNavLink
					key={Math.random()}
					handleClick={handleClick}
					link={link}
				/>
			))}
		</div>
	);
};

const MobileNavLink = ({
	link,
	handleClick
}: {
	link: ILinkDefinition;
	handleClick: () => void;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const hasSubLinks = link.subLinks && link.subLinks.length > 0;

	const linkHeaderStyle: React.CSSProperties = {
		borderLeft: "2px solid hsl(36, 100%, 55%)"
	};

	return (
		<span className="px-4">
			<span className="nav-bar-mobile-link">
				<span className="nav-bar-mobile-link-header">
					<Link
						to={link.to}
						target={link.target}
						className={`py-4 pl-3 text-color w-${hasSubLinks ? "75" : "100"}`}
						onClick={handleClick}>
						<h5 className="px-2 d-inline-block" style={linkHeaderStyle}>
							{link.displayName}
						</h5>
					</Link>
					{hasSubLinks ? (
						<div
							className="py-4 pr-3 w-25"
							onClick={() => setIsOpen((prev) => !prev)}>
							<FontAwesomeIcon
								icon={`angle-${isOpen ? "up" : "down"}`}
								className="nav-bar-mobile-link-caret"
								pull="right"
							/>
						</div>
					) : null}
				</span>
				{hasSubLinks && isOpen ? (
					<ul className="list-unstyled" onClick={handleClick}>
						{link.subLinks?.map((subLink) => (
							<li key={link.to + subLink.hash} className="pl-4 py-3">
								<Link
									to={`${link.to}#${subLink.hash}`}
									className="text-color d-inline-block w-100">
									{subLink.displayName}
								</Link>
							</li>
						))}
					</ul>
				) : null}
			</span>
		</span>
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

export default NavbarMobile;

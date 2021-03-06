import React from "react";
import navLinkDefinitionsJson from "./nav-link-definitions.json";
import sidebarLinkDefinitionsJson from "./sidebar-link-definitions.json";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

import { ISidebarLink } from "./Sidebar";

export interface ILinkDefinition {
	to: string;
	displayName: string;
	target?: "_self" | "_blank";
	exact?: boolean;
	subLinks?: {
		displayName: string;
		hash: string;
	}[];
}

const linkDefinitions = navLinkDefinitionsJson as ILinkDefinition[];
const sidebarLinkDefinitions = sidebarLinkDefinitionsJson as ISidebarLink[];

const linksForMobile: ILinkDefinition[] = linkDefinitions.concat(
	sidebarLinkDefinitions.map((sidebarLink) => {
		return {
			to: sidebarLink.pathname,
			displayName: sidebarLink.displayName,
			target: sidebarLink.target
		};
	})
);

const Header = ({ currentPath }: { currentPath: string }) => {
	return (
		<>
			<NavbarMobile className="d-md-none" links={linksForMobile} />
			<NavbarDesktop
				className="d-none d-md-flex"
				links={linkDefinitions}
				currentPath={currentPath}
			/>
		</>
	);
};

export default Header;

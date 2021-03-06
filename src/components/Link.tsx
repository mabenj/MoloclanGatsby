import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";
import React from "react";

export interface ILinkProps
	extends Omit<GatsbyLinkProps<{}>, "ref">,
		React.HTMLAttributes<HTMLAnchorElement> {
	to: string;
	activeClassName?: string;
	partiallyActive?: boolean;
}

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
	children,
	to,
	activeClassName,
	partiallyActive,
	...other
}: ILinkProps) => {
	// Tailor the following test to your environment.
	// This example assumes that any internal link (intended for Gatsby)
	// will start with exactly one slash, and that anything else is external.
	const internal = /^\/(?!\/)/.test(to);
	// Use Gatsby Link for internal links, and <a> for others
	if (internal) {
		return (
			<GatsbyLink
				to={to}
				activeClassName={activeClassName}
				partiallyActive={partiallyActive}
				{...other}>
				{children}
			</GatsbyLink>
		);
	}
	return (
		<a href={to} {...other}>
			{children}
		</a>
	);
};
export default Link;

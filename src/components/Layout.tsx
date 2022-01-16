import React, { useEffect } from "react";
import MainContainer from "./MainContainer";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";

const Layout = ({
	children,
	location
}: {
	children: React.ReactNode;
	location: any;
}) => {
	return (
		<>
			<Header currentPath={location.pathname} />
			<MainContainer>
				<main>{children}</main>
			</MainContainer>
			<Footer />
		</>
	);
};

export default Layout;

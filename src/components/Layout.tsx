import React from "react";
import MainContainer from "./MainContainer";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<MainContainer>
				<main>{children}</main>
			</MainContainer>
			<Footer />
		</>
	);
};
export default Layout;

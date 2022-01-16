import React from "react";
import Home from "../components/PageComponents/Home";
import SEO from "../components/Seo";

export default function IndexPage() {
	return (
		<>
			<SEO description="MOLO Clan viralliset kotisivut" />
			<Home />
		</>
	);
}

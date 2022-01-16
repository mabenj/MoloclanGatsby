import React from "react";
import Gallery from "../components/PageComponents/Gallery";
import SEO from "../components/Seo";

export default function GalleryPage() {
	return (
		<>
			<SEO title="Galleria" description="MOLO Clan galleria" />
			<Gallery />;
		</>
	);
}

import React from "react";
import Servers from "../components/PageComponents/Servers";
import SEO from "../components/Seo";

export default function ServutPage() {
	return (
		<>
			<SEO title="Servut" description="MOLO servut" />
			<Servers />
		</>
	);
}

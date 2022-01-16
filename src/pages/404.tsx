import React from "react";
import NotFound from "../components/PageComponents/NotFound";
import SEO from "../components/Seo";

export default function NotFoundPage() {
	return (
		<>
			<SEO title="404" description="Not found: 404" />
			<NotFound />;
		</>
	);
}

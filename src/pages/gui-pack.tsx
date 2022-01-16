import React from "react";
import GuiPack from "../components/PageComponents/GuiPack";
import SEO from "../components/Seo";

export default function GuiPackPage() {
	return (
		<>
			<SEO title="GUI Pack" description="Minecraft GUI Pack resource pack" />
			<GuiPack />;
		</>
	);
}

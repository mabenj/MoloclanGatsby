import "./styles/styles.scss";

////////////////////////// ICONS START //////////////////////////////////////
// Regular
import { faBuilding, faCopy } from "@fortawesome/free-regular-svg-icons";
// Solid
import {
	faHandHoldingUsd,
	faBars,
	faExternalLinkAlt,
	faUser,
	faDownload,
	faCheckCircle,
	faTimesCircle,
	faPoop,
	faDrumstickBite,
	faSave,
	faTimes,
	faCaretDown,
	faCubes,
	faAngleDown,
	faAngleUp
} from "@fortawesome/free-solid-svg-icons";
// Brands
import {
	faTeamspeak,
	faDiscord,
	faSkype
} from "@fortawesome/free-brands-svg-icons";
// Custom
import { facMinecraft } from "./CustomFontAwesomeIcons";
import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";

library.add(
	faBuilding,
	faHandHoldingUsd,
	faTeamspeak,
	faDiscord,
	faCopy,
	faBars,
	faExternalLinkAlt,
	faUser,
	faDownload,
	faCheckCircle,
	faTimesCircle,
	faPoop,
	faSkype,
	faDrumstickBite,
	faSave,
	faTimes,
	faCaretDown,
	faCubes,
	facMinecraft,
	faAngleDown,
	faAngleUp
);
////////////////////////// ICONS END //////////////////////////////////////

function App({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}

export default App;

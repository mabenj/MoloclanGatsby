import React from "react";
import Layout from "./src/components/Layout";
import App from "./src/App";

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export const wrapRootElement = ({ element }) => <App>{element}</App>;

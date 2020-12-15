import React from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import AppRoutes from "./AppRoutes";

const App = () => {
	return (
		<>
			<Header />
			<AppRoutes />
			<Footer />
		</>
	);
};

export default App;

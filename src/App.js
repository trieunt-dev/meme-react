import React from "react";
import { useSelector } from "react-redux";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Loading } from "./components/Loading";
import { AppRoutes } from "./AppRoutes";

const App = () => {
	const isLoading = useSelector((state) => state.App.isLoading);

	return (
		<>
			<Header />
			<AppRoutes />
			<Footer />
			<Loading isLoading={isLoading} />
		</>
	);
};

export default App;

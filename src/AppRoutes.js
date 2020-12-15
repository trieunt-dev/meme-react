import React from "react";
import { Route, Switch } from "react-router-dom";

import { Routers } from "./routers";

const AppRoutes = () => {
	return (
		<Switch>
			{Routers.map((route, index) => {
				return (
					<Route path={route.path} exact={route.exact}>
						<route.component />
					</Route>
				);
			})}
		</Switch>
	);
};

export default AppRoutes;

import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { PATHS } from "../../constants";

const useNotAuth = () => {
	const location = useLocation();
	const history = useHistory();
	const token = useSelector((state) => state.Auth.ACCESS_TOKEN);

	useEffect(() => {
		if (token) {
			history.push(PATHS.HOME_PAGE);
		}
	}, [location, history, token]);
};

export default useNotAuth;

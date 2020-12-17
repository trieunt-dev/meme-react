import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { PATHS } from "../../constants";

const useAuth = () => {
	const history = useHistory();
	const location = useLocation();
	const token = useSelector((state) => state.Auth.ACCESS_TOKEN);

	useEffect(() => {
		if (!token) {
			history.push(PATHS.LOGIN);
		}
	}, [location, token, history]);
};

export default useAuth;

import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants";

const LoginHeader = () => {
	return (
		<div className="ass1-login__logo">
			<Link to={PATHS.HOME_PAGE} className="ass1-logo">
				TCL Meme
			</Link>
		</div>
	);
};

export default LoginHeader;

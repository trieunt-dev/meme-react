import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNotAuth } from "../../helpers";

import { LoginForm, LoginHeader } from "../../components/Login";
import { actHandleLogin } from "../../store/auth/actions";
import { PATHS } from "../../constants";

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	useNotAuth();

	const handleLogin = (formLogin) => {
		const { email, password } = formLogin;
		dispatch(actHandleLogin({ email, password })).then((res) => {
			if (res.success) {
				history.push(PATHS.HOME_PAGE);
			} else {
				alert(res.error);
				console.log(res.error);
			}
		});
	};

	return (
		<main>
			<div className="ass1-login">
				<LoginHeader />
				<LoginForm handleLogin={handleLogin} />
			</div>
		</main>
	);
};

export default Login;

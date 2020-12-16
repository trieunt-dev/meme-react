import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants";

const LoginForm = ({ handleLogin }) => {
	const [formLogin, setFormLogin] = useState({
		email: "",
		password: "",
	});

	const onChangeFormLogin = (keyField) => (e) => {
		setFormLogin({
			...formLogin,
			[keyField]: e.target.value,
		});
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		handleLogin(formLogin);
	};

	return (
		<div className="ass1-login__content">
			<p>Đăng nhập</p>
			<div className="ass1-login__form">
				<form>
					<input
						onChange={onChangeFormLogin("email")}
						value={formLogin.email}
						type="text"
						className="form-control"
						placeholder="Email"
						required=""
					/>
					<input
						onChange={onChangeFormLogin("password")}
						value={formLogin.password}
						type="password"
						className="form-control"
						placeholder="Mật khẩu"
						required=""
					/>

					<div className="ass1-login__send">
						<Link to={PATHS.REGISTER}>Đăng ký một tài khoản</Link>
						<button
							onClick={handleSubmitForm}
							type="submit"
							className="ass1-btn"
						>
							Đăng nhập
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;

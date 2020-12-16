import { authService } from "../../services";
import { actHideLoading, actShowLoading } from "../app/actions";
import { actSetUserInfo } from "../user/actions";
import { Storage } from "../../helpers";

const nameSpace = "auth:";
export const LOGIN_SUCCESS = `${nameSpace}LOGIN_SUCCESS`;

export const actLoginSuccess = ({ token }) => {
	return {
		type: LOGIN_SUCCESS,
		payload: {
			token,
		},
	};
};

export const actHandleLogin = ({ email, password }) => {
	return async (dispatch) => {
		try {
			dispatch(actShowLoading());
			const response = await authService.login({ email, password });
			dispatch(actHideLoading());

			if (response.data.status !== 200) {
				return {
					success: false,
					error: response.data.error,
				};
			} else {
				const user = response.data.user;
				const token = response.data.token;
				Storage.setToken(token);
				dispatch(actLoginSuccess({ token }));
				dispatch(actSetUserInfo({ user }));
				return {
					success: true,
				};
			}
		} catch (error) {
			dispatch(actHideLoading());
			return {
				success: false,
				error: error.message,
			};
		}
	};
};

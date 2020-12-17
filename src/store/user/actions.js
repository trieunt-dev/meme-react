import { actHideLoading, actShowLoading } from "../app/actions";
import { userService } from "../../services";

const nameSpace = "user:";
export const SET_USER_INFO = `${nameSpace}SET_USER_INFO`;

export const actSetUserInfo = ({ user }) => {
	return {
		type: SET_USER_INFO,
		payload: {
			user,
		},
	};
};

export const asyncGetUserById = ({ userid }) => {
	return async (dispatch) => {
		try {
			dispatch(actShowLoading());
			const response = await userService.getUserById({ userid });
			dispatch(actHideLoading());

			if (response?.data?.status === 200) {
				const user = response?.data?.user;
				dispatch(actSetUserInfo({ user }));
				return {
					success: true,
					user,
				};
			}
			return {
				success: false,
				error: response.error,
			};
		} catch (error) {
			dispatch(actHideLoading());
			return {
				success: false,
				error: error.message,
			};
		}
	};
};

export const asyncUpdateProfile = ({
	avatar,
	fullname,
	gender,
	description,
}) => {
	return async (dispatch) => {
		try {
			const formData = new FormData();

			formData.append("fullname", fullname);
			formData.append("gender", gender);
			formData.append("description", description);
			if (avatar) {
				formData.append("avatar", avatar);
			}
			dispatch(actShowLoading());
			const response = await userService.updateProfile(formData);
			dispatch(actHideLoading());

			if (response?.data?.status === 200) {
				const user = response?.data?.user;
				dispatch(actSetUserInfo({ user }));
				return {
					success: true,
					user,
				};
			}
			return {
				success: false,
				error: response.error,
			};
		} catch (error) {
			dispatch(actHideLoading());
			return {
				success: false,
				error: error.message,
			};
		}
	};
};

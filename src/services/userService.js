import { api } from "./";

const userService = {
	getUserById({ userid }) {
		return api.callAPIWithAuth().get(`/member/member.php?userid=${userid}`);
	},
	updateProfile(formData) {
		return api
			.callAPIWithAuth({ Accept: "multipart/form-data" })
			.post(`/member/update.php`, formData);
	},
};

export default userService;

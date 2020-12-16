import { api } from "./";

const authService = {
	login({ email, password }) {
		return api.callAPI().post("/member/login.php", { email, password });
	},
};

export default authService;

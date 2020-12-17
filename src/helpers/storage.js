import { parseJwt } from "./";
const keyToken = "ACCESS_TOKEN";
const Storage = {
	setToken(token) {
		localStorage.setItem(keyToken, token);
	},
	getToken() {
		const token = localStorage.getItem(keyToken);
		try {
			const parseObj = parseJwt(token);
			if (parseObj && parseObj.id) {
				return token;
			}
			return "";
		} catch (error) {
			return "";
		}
	},
};

export default Storage;

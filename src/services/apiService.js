import axios from "axios";
import { Storage } from "../helpers";

const BASE_URL = "http://api-meme-zendvn-01.herokuapp.com/api";

const api = {
	callAPI() {
		return axios.create({
			baseURL: BASE_URL,
			headers: {
				"Content-Type": "application/json",
			},
		});
	},
	callAPIWithAuth(headers = {}) {
		const token = Storage.getToken();
		return axios.create({
			baseURL: BASE_URL,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
				...headers,
			},
		});
	},
};

export default api;

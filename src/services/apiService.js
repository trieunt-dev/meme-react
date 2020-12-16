import axios from "axios";

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
	callAPIWithAuth() {
		return axios.create({
			baseURL: BASE_URL,
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer my-token",
			},
		});
	},
};

export default api;

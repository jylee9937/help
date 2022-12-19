import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/',
	headers: {
		"content-type": "application/json",
		"apikey": "FcKdtJs202209",
		"username": "KDT3_TEAM_HelloWorld" //본명 혹은 팀 이름
	}
});

import axios from "axios";
import { API_URL } from "../utilities";

export const signUpService = (signUpInput) => {
    return axios.post(`${API_URL}/api/auth/signup`, signUpInput);
};
export const loginService = (loginInput) => {
    return axios.post(`${API_URL}/api/auth/login`, loginInput);
};

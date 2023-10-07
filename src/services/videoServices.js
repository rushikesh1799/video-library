import axios from "axios";
import { API_URL } from "../utilities";

export const getAllVideosService = async () => {
    const response = await axios.get(`${API_URL}/api/videos`);
    return response;
};

export const getAllCategoriesService = async () => {
    const response = await axios.get(`${API_URL}/api/categories`);
    return response;
};

export const increaseViewCountService = async (videoId) => {
    const response = await axios.get(
        `${API_URL}/api/videos/${videoId}/viewcount`
    );
    return response;
};

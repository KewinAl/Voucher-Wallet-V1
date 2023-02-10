import axiosInstance from "../axiosInstance";

export function fetchTags(config) {
    return axiosInstance.get("me/", config);
}

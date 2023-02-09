import axiosInstance from "../axiosInstance";

//TODO: Backend endpoint for auth/token
export function getTags(data) {
    return axiosInstance.get("tag/tags/", data);
}
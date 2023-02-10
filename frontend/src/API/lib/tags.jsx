import axiosInstance from "../axiosInstance";

export function fetchTags(data) {
    return axiosInstance.get("tag/tags/", data);
}

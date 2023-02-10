import axiosInstance from "../axiosInstance";

export function getTags(data) {
    return axiosInstance.get("tag/tags/", data);
}

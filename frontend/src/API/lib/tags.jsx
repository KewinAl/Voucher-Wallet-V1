import axiosInstance from "../axiosInstance";

export function fetchTags() {
  return axiosInstance.get(`tag/`);
}

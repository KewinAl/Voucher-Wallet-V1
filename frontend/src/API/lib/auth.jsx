import axiosInstance from "../axiosInstance";

//TODO: Backend endpoint for auth/token
export function getAuthToken(data) {
  return axiosInstance.post("auth/token/", data);
}

export function fetchProfile() {
  return axiosInstance.get("me/");
}

// export function setProfile(data) {
//   return axiosInstance.post("auth/profile/", data);
// }

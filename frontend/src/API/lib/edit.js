import axiosInstance from "../axiosInstance";

export function getMyCustomerProfile() {
    return axiosInstance.patch(`me/`);
}
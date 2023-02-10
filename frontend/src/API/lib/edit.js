import axiosInstance from "../axiosInstance";

export function UpdateEditCustomerProfile() {
    return axiosInstance.patch(`me/`);
}
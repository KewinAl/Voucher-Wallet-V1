import axiosInstance from "../axiosInstance";

export function getMyCustomerProfile() {
    return axiosInstance.get(`me/`);


}

export function getMyCustomerProfile() {
    return axiosInstance.patch(`me/`);
}
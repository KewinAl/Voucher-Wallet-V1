import axiosInstance from "../axiosInstance";

export function getCustomerProfile(customer_Id) {
  return axiosInstance.get(`customer/${customer_Id}/`);
}

export function getMyCustomerProfile() {
  return axiosInstance.get(`me/`);
}

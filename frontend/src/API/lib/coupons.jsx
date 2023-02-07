import axiosInstance from "../axiosInstance";

export function getAllCoupons() {
  return axiosInstance.get(`coupon/`);
}

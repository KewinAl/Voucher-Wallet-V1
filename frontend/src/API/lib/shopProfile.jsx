import axiosInstance from "../axiosInstance";

export function getShopProfile(shop_Id) {
  return axiosInstance.get(`shop/${shop_Id}/`);
}

export function getCoupons() {
  //return axiosInstance.get(`shop/`);
}

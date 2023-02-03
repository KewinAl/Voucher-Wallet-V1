import axiosInstance from "../axiosInstance";

export function getShopProfile(shop_Id) {
  return axiosInstance.get(`shop/${shop_Id}/`);
}

export function getMyShopProfile() {
  return axiosInstance.get(`myShop/`);
}

import axios from "axios";

const getAllCoupons = async () => {
  try {
    const response = await axios.get(`coupon/`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export { getAllCoupons };

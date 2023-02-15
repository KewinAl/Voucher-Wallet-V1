import { createSlice } from "@reduxjs/toolkit";
import microsoftLogo from "../Assets/companyLogo.png";
import aldiLogo from "../Assets/AldiLogo.png";
import tropical from "../Assets/tropical.jpg";
import background2 from "../Assets/couponPic1.jpg";

const couponSlice = createSlice({
  name: "coupon",
  initialState: {
    coupons: [
      {
        id: 1,
        title: "10% Off on all products",
        description: "Get 10% discount",
        times_redeemed: 14,
        redeem_limit: 28,
        discount: 10,
        discount_type: "percent",
        companyLogo: microsoftLogo,
        background_image: tropical,
        expiration_date: "2023-06-30",
        link: "www.cats.ch",
        shop_profile: {
          id: 1,
          name: "Shop A",
        },
        tag: {
          id: 1,
          name: "Summer Sale",
        },
      },
      {
        id: 2,
        title: "Limited Special Offer",
        description: "Applicable after 50$",
        times_redeemed: 14,
        redeem_limit: 28,
        discount: 5,
        discount_type: "amount",
        companyLogo: aldiLogo,
        background_image: background2,
        expiration_date: "2023-12-31",
        link: "www.aldi.de",
        shop_profile: {
          id: 2,
          name: "Shop B",
        },
        tag: {
          id: 2,
          name: "Special Limited Edition",
        },
      },
    ],
  },
  reducers: {
    addCoupon: (state, action) => {
      state.coupons.push(action.payload);
    },
  },
});

export const { addCoupon } = couponSlice.actions;

export default couponSlice.reducer;

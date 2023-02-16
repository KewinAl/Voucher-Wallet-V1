import { createSlice } from "@reduxjs/toolkit";

const couponSlice = createSlice({
  name: "coupon",
  initialState: {
    coupons: [
      // {
      //   id: 1,
      //   title: "10% Off on all products",
      //   description: "Get 10% discount",
      //   times_redeemed: 14,
      //   redeem_limit: 28,
      //   discount: 10,
      //   discount_type: "percent",
      //   companyLogo: microsoftLogo,
      //   background_image: tropical,
      //   expiration_date: "2023-06-30",
      //   link: "www.cats.ch",
      //   shop_profile: {
      //     id: 1,
      //     name: "Shop A",
      //   },
      //   tag: {
      //     id: 1,
      //     name: "Summer Sale",
      //   },
      //   analytics: {
      //     averageAge: 45,
      //     male: 10,
      //     female: 80,
      //     other: 10,
      //     zurich: 60,
      //     basel: 15,
      //     bern: 25,
      //   },
      // },
      // {
      //   id: 2,
      //   title: "Limited Special Offer",
      //   description: "Applicable after 50$",
      //   times_redeemed: 20,
      //   redeem_limit: 40,
      //   discount: 5,
      //   discount_type: "amount",
      //   companyLogo: aldiLogo,
      //   background_image: background2,
      //   expiration_date: "2023-12-31",
      //   link: "www.aldi.de",
      //   shop_profile: {
      //     id: 2,
      //     name: "Shop B",
      //   },
      //   tag: {
      //     id: 2,
      //     name: "Special Limited Edition",
      //   },
      //   analytics: {
      //     averageAge: 21,
      //     male: 90,
      //     female: 8,
      //     other: 2,
      //     zurich: 87,
      //     basel: 12,
      //     bern: 1,
      //   },
      // },
    ],
  },
  reducers: {
    addCoupon: (state, action) => {
      console.log("TADA");
      state.coupons.push(action.payload);
    },
    changeCouponData: (state, action) => {
      const { couponId, data } = action.payload;

      const couponIndex = state.coupons.findIndex(
        (coupon) => coupon.id === couponId
      );

      if (couponIndex !== -1) {
        state.coupons[couponIndex] = {
          ...state.coupons[couponIndex],
          ...data,
        };
      }
    },
    deleteCoupon: (state, action) => {
      const couponId = action.payload;
      state.coupons = state.coupons.filter((coupon) => coupon.id !== couponId);
    },
  },
});

export const { addCoupon, changeCouponData, deleteCoupon } =
  couponSlice.actions;

export default couponSlice.reducer;

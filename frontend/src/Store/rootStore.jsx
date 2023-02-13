import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import tagReducer from "./tagSlice";
import customerReducer from "./customerSlice";
import couponReducer from "./couponSlice";

const rootStore = configureStore({
  reducer: {
    customer: customerReducer,
    auth: authReducer, //exporting directly as reducer
    tags: tagReducer, //exporting directly as reducer
    coupons: couponReducer,
  },
});

export default rootStore;

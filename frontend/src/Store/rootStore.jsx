import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import authReducer from "./authSlice";
import tagReducer from "./tagSlice";
import customerReducer from "./customerSlice";
import couponReducer from "./couponSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "tags", "coupons"],
};

const rootReducer = combineReducers({
  customer: customerReducer,
  auth: authReducer,
  tags: tagReducer,
  coupons: couponReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const rootStore = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(rootStore);

export { rootStore, persistor };

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import tagReducer from "./tagSlice";
import customerReducer from "./customerSlice";

const rootStore = configureStore({
    reducer: {
        customer: customerReducer,
        auth: authReducer, //exporting directly as reducer
        tags: tagReducer //exporting directly as reducer
        }
})

export default rootStore
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import tagReducer from "./tagSlice";

const rootStore = configureStore({
    reducer: {
        auth: authReducer, //exporting directly as reducer
        tags: tagReducer
    }
})

export default rootStore
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        access: undefined,
        refreshtoken: undefined,
        email: undefined
    },
    reducers: {
        setAuth: (state, action) => {

            const newState = { ...state };

            newState.access = action.payload.access;
            newState.refreshtoken = action.payload.refreshtoken;

            return newState;
        },
        clearAuth: (state) => {
            const newState = { ...state };

            newState.access = undefined;// Set the data to undefined
            newState.refreshtoken = undefined;// Set the data to
            newState.email = undefined; // Set the data to undefined

            return newState;
        },
        setEmail: (state, action) => {
            const newState = {...state};

            newState.email = action.payload;

            return newState;
        }
    }
})

export const { setAuth, clearAuth, setEmail } = authSlice.actions
export default authSlice.reducer // as authReducer imported

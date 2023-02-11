import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: "customer",
    initialState: {
        age: '',
        gender: '',
        firstname: '',
        lastname: '',
        coupons: [],
    },
    reducers: {
        setCustomerDetails: (state, action) => {
            state.age = action.payload.age;
            state.gender = action.payload.gender;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            if (action.payload.coupons) {
                state.coupons = action.payload.coupons;
            }
        },
        }
})
    


export const { setCustomerDetails } = customerSlice.actions
export default customerSlice.reducer // as authReducer imported

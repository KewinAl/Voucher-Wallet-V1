import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
    name: "tag",
    initialState: {
        tags: [{
            "id": 1,
            "description": "Sport",
            "shops_tagged": [],
            "customers_tagging": []
        },
            {
                "id": 2,
                "description": "Video Games",
                "shops_tagged": [],
                "customers_tagging": []
            },
            {
                "id": 3,
                "description": "Food",
                "shops_tagged": [],
                "customers_tagging": []
            }],
    },
    reducers: {
        setTags: (state, action) => {
            state.tags = action.payload;
        }
    }
})

export const { setTags } = tagSlice.actions
export default tagSlice.reducer // as authReducer imported

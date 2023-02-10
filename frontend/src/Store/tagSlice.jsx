import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
    name: "tags",
    initialState: {
        tags: []
    },
    reducers: {
        setTags: (state, action) => {
            console.log("received")
            state.tags = action.payload;
        }
    }
})

export const { setTags } = tagSlice.actions
export default tagSlice.reducer // as authReducer imported

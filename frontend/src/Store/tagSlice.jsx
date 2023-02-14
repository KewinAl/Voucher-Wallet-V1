import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
  name: "tags",
  initialState: {
    tags: ['Sports', 'Food', 'Games'],
  },
  reducers: {
    setTags: (state, action) => {
      //console.log("setTags payload received")
      state.tags = action.payload;
    },
  },
});

export const { setTags } = tagSlice.actions;
export default tagSlice.reducer; // as authReducer imported

import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
  name: "tags",
  initialState: {
    tags: ['Food', 
      'Video Games', 
      'Sports', 
      'Fashion', 
      'Decoration', 
      'Pets', 
      'Restaurants', 
      'Flowers', 
      'Beauty', 
      'Car-Services', 
      'Electronics',
      'Clothing',
      'Home and Garden',
      'Books and Magazines',
      'Travel',
      'Beauty and Personal Care',
      'Sports and Outdoors',
      'Music',
      'Movies and TV',
      'Health and Wellness',
      'Pets',
      'Jewelry and Accessories',
      'Toys and Games',
      'Office and School Supplies',
      'Automotive',
      'Art and Photography',
      'Business and Finance',
      'Children and Baby',
      'Shoes and Footwear'],
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

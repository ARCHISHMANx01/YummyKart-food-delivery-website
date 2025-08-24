import { createSlice } from '@reduxjs/toolkit';

const CategorySlice = createSlice({
  name: 'category',
  initialState: 'All',
  reducers: {
    setCategory: (state, action) => action.payload,
  },
});

export const { setCategory } = CategorySlice.actions;

export default CategorySlice.reducer;

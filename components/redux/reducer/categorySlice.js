import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Lamp: [],
  Chair: [],
  Desk: [],
  Electronics: [],
  PersonalComputer: [],
  Sofa: [],
  Others: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addToCategory(state, action) {

    },
  }
})

const cartReducer = categorySlice.reducer;

export const { addToCategory } = categorySlice.actions;
export default cartReducer;
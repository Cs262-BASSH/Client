import { createSlice } from "@reduxjs/toolkit";
import Items from '../../../data/item';

const initialState = Items;

const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    addToHomepage(state, action) {
      //TODO: if initialState is actually an array, just push new items into initialState

      //TODO: if initialState is actually not an array, 1) copy initialState to a temp array variable,
      //TODO: 2) push new item to the temp array variable
      //TODO: 3) initialState = temp array varriable
    },

    removeFromHomepage(state, action) {
      //TODO: remove item from database = homepage and user history
    },
  }
})

const cartReducer = homepageSlice.reducer;

export const {addToHomepage, removeFromHomepage} = homepageSlice.actions;
export default cartReducer;
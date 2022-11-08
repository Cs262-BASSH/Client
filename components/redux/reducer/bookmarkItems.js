import { createSlice } from "@reduxjs/toolkit";
import Items from '../../../data/item';

const initialState = []; // todo: add item.js and upload here

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    addToBookmark(state, action) {
      //const {id} = payload;

      //const find = state.findIndex((item) => item.id === action.payload.id); // find id
      //if (find) {
      //  return (
     //     state.map((item) => {
     //       item.id === id ? [...item] : item
      //    })
      //  );
      //}
      //else {
        state.push({...action.payload});
      //}
    },

    removeFromBookmark(state, action) {
      const newBookmark = state.filter(
        (item) => {item.id !== state.id} // !what is item???
      );

      state = newBookmark;
      return state;
    },

    checkItemInBookmark(state, action) {
      return state.includes(action.payload);
    }
  }
})

export const {addToBookmark, removeFromBookmark, checkItemInBookmark} = bookmarkSlice.actions;
const cartReducer = bookmarkSlice.reducer;

export default cartReducer;
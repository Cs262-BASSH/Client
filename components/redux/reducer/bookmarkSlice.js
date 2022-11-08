import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

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
      // state.map((item) => {
        const newBookmark = state.filter(
          (item) => {item.id !== state.id} // !what is item???
        );
        state = newBookmark;
      // });
      return state;
    },

    checkItemInBookmark(state, action) {
      return state.includes(action.payload);
    }
  }
})

const cartReducer = bookmarkSlice.reducer;

export const {addToBookmark, removeFromBookmark} = bookmarkSlice.actions;
export default cartReducer;
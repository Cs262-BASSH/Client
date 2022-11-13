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
      state.push(action.payload);
      // state.push({...action.payload});
      //}
      console.log(state);
    },

    removeFromBookmark(state, action) {
      console.log("index: " + action.payload.id);
      //const newBookmark = state.splice(action.payload.id, 1);

      const newBookmark = state.filter(
        (item) => { item != action.payload }
      );

      state = newBookmark;
      console.log(state);

      return state;
    },

    checkItemInBookmark(state, action) {
      return state.includes(action.payload);
    }
  }
})

const cartReducer = bookmarkSlice.reducer;

export const { addToBookmark, removeFromBookmark } = bookmarkSlice.actions;
export default cartReducer;
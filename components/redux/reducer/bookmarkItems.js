import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    addToBookmark(state, {payload}) {
      const {id} = payload;

      const find = state.find((item) => item.id === id);
      if (find) {
        return (
          state.map((item) => {
            item.id === id ? {...item, quantity: item.quantity +1,} : item
          })
        );
      }
      else {
        state.push({...payload, quantity: 1,});
      }
    },

    removeFromBookmark: (state, action) => {
      const itemId = action.payload;
      return (
        state.filter((item) => item.id !== itemId)
      );
    }
  }
})

export const {addToBookmark, removeFromBookmark} = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;

// const bookmarkItems = (state = [], action) => {
//   switch(action.type) {
//     case 'ADD_TO_BOOKMARK':
//       return [...state, action.payload];
//     case 'REMOVE_FROM_BOOKMARK':
//       return state.filter((bookmarkItems) => bookmarkItems.id !== action.payload.id);
//   }
//   return state;
// }

// export default bookmarkItems;
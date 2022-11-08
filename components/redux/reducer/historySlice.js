import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const historySlice = createSlice({
  name: 'userSellHistory',
  initialState,
  reducers: {
    addToSalesHistory(state, action) {
      //TODO: add to user sales history

    },

    removeFromSalesHistory(state, action) {
      //TODO: remove item from sales history and homepage

    },
  }
})

const cartReducer = historySlice.reducer;

export const {addToSalesHistory, removeFromSalesHistory} = historySlice.actions;
export default cartReducer;
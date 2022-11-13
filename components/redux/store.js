import { configureStore } from '@reduxjs/toolkit';
import bookmarkSlice from './reducer/bookmarkSlice';
import homepageSlice from './reducer/homepageSlice';
import historySlice from './reducer/historySlice';
import categorySlice from './reducer/categorySlice';

const store = configureStore({
  reducer: {
    bookmark: bookmarkSlice,
    homepage: homepageSlice,
    history: historySlice,
    category: categorySlice,
  }
});

export default store;

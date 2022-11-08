import {configureStore} from '@reduxjs/toolkit';
import bookmarkItems from './reducer/bookmarkItems';

const store = configureStore({
  reducer: {
    bookmark: bookmarkItems,
  }
});

export default store;


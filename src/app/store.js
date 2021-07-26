
import { configureStore } from '@reduxjs/toolkit';
import bookmarksReducer from '../features/bookmarks/bookmarks-slice';


const store = configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
  }
});

export default store;


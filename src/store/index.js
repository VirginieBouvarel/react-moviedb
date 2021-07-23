
import { configureStore } from '@reduxjs/toolkit';
import bookmarksSlice from './bookmarks-slice';


const store = configureStore({
  reducer: bookmarksSlice.reducer,
});


export default store;
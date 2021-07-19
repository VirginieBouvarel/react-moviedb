
import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './movies-slice';


const store = configureStore({
  reducer: moviesSlice.reducer,
});


export default store;
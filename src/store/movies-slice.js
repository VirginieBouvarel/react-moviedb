import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'search',
  initialState: {
    searchKeywords: '',
    searchResults: null,
    ideSelected: null,
    bookmarks: []
  },
  reducers: {
    selectMovie(state, action) {
      state.idSelected = action.payload;
    },
    displayMoviesResults(state, action) {
      state.searchKeywords = action.payload.keywords;
      state.searchResults = action.payload.results;
    },
    createBookmark(state, action) {
      state.bookmarks = [...state.bookmarks, action.payload];
    },
    removeBookmark(state, action) {
      state.bookmarks = state.bookmarks.filter(bookmark => bookmark.id !== action.payload);
    },
    replaceBookmarks(state, action) {
      state.bookmarks = action.payload;
    }
  }
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice;
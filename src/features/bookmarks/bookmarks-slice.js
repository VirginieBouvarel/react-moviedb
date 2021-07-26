import { createSlice } from '@reduxjs/toolkit';

const bookmarksSlice = createSlice({
  name: 'search',
  initialState: {
    searchKeywords: '',
    searchResults: null,
    idSelected: null,
    bookmarksArray: []
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
      state.bookmarksArray = [...state.bookmarksArray, action.payload];
    },
    removeBookmark(state, action) {
      state.bookmarksArray = state.bookmarksArray.filter(bookmark => bookmark.id !== action.payload);
    },
    replaceBookmarks(state, action) {
      state.bookmarksArray = action.payload;
    }
  }
});

export const { selectMovie, displayMoviesResults, createBookmark, removeBookmark, replaceBookmarks } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
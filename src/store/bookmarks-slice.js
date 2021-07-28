import { createSlice } from '@reduxjs/toolkit';

const bookmarksSlice = createSlice({
  name: 'search',
  initialState: {
    searchKeywords: '',
    searchResults: null,
    idSelected: null,
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
      // for (let item of state.bookmarks) {
      //   if (item.id === action.payload.id) return;
      // }
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

export const bookmarksActions = bookmarksSlice.actions;
export default bookmarksSlice;
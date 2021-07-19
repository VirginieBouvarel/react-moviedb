import { createSlice } from '@reduxjs/toolkit';
import firebase from '../utils/firebase-config';

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
      for (let item of state.bookmarks) {
        if (item.id === action.payload.id) return;
      }
      firebase.database().ref('bookmarks').push(action.payload);
    },
    removeBookmark(state, action) {
      const bookmarkToDelete = state.bookmarks.filter(bookmark => bookmark.id === action.payload);
      firebase.database().ref('bookmarks').child(bookmarkToDelete[0].key).remove();
    },
    replaceBookmarks(state, action) {
      state.bookmarks = action.payload;
    }
  }
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice;
import { bookmarksActions } from './bookmarks-slice';
import firebase from '../utils/firebase-config';



export const fetchBookmarks = () => {
  return async dispatch => {
    const bookmarksDb = firebase.database().ref('bookmarks');

    bookmarksDb.once('value', snapshot => {
      let previousBookmarks = snapshot.val();

      let formatedBookmarks = [];
      for (let key in previousBookmarks) {
        formatedBookmarks.push({ key, ...previousBookmarks[key] });
      }
      dispatch(bookmarksActions.replaceBookmarks(formatedBookmarks));
    })
  }
}

export const addBookmark = (movie) => {
  return async dispatch => {
    const bookmarksDb = firebase.database().ref('bookmarks');
    // bookmarksDb.on('value', snapshot => {
    //   let previousBookmarks = snapshot.val();

    //   for (let key in previousBookmarks) {
    //     if (key.id === movie.id) return;
    //   }
    // })

    const bookmark = {
      average: movie.average,
      id: movie.id,
      posterUrl: movie.posterUrl,
      release: movie.release,
      summary: movie.summary,
      title: movie.title
    }
    bookmarksDb.push(bookmark);
    dispatch(bookmarksActions.createBookmark(bookmark));
  }
}

export const deleteBookmark = (id) => {
  return async dispatch => {
    const bookmarksDb = firebase.database().ref('bookmarks');
    bookmarksDb.on('value', snapshot => {
      let previousBookmarks = snapshot.val();

      for (let key in previousBookmarks) {
        if (previousBookmarks[key].id === id) {
          bookmarksDb.child(key).remove();
          dispatch(bookmarksActions.removeBookmark(id));
        }
      }
    })

  }
}
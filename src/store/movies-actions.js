import { moviesActions } from './movies-slice';
import firebase from '../utils/firebase-config';


export const fetchBookmarks = () => {
  return async dispatch => {
    const bookmarksDb = firebase.database().ref('bookmarks');

    bookmarksDb.on('value', snapshot => {
      let previousBookmarks = snapshot.val();

      let formatedBookmarks = [];
      for (let key in previousBookmarks) {
        formatedBookmarks.push({ key, ...previousBookmarks[key] });
      }
      dispatch(moviesActions.replaceBookmarks(formatedBookmarks));
    })
  }
}
import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebase-config';
import classes from './BookmarksList.module.css';

const BookmarksList = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const bookmarksDb = firebase.database().ref('bookmarks');

    bookmarksDb.on('value', snapshot => {
      let previousBookmarks = snapshot.val();

      let formatedBookmarks = [];
      for (let id in previousBookmarks) {
        formatedBookmarks.push({ id, ...previousBookmarks[id] });
      }
      setBookmarks(formatedBookmarks);
    })
  }, []);

  return (
    <div className={classes.bookmarks}>
      <h3>Mes films favoris</h3>
      <ul>
        {bookmarks && bookmarks.map(item => <li key={item.id}>{item.title} - {item.id}</li>)}
      </ul>
    </div>
  )
}

export default BookmarksList

import classes from './BookmarksList.module.css';

const BookmarksList = ({ bookmarks }) => {

  return (
    <div className={classes.bookmarks}>
      <h3>Mes films favoris</h3>
      <ul>
        {bookmarks && bookmarks.map(bookmark => <li key={bookmark.key}>{bookmark.title}</li>)}
      </ul>
    </div>
  )
}

export default BookmarksList

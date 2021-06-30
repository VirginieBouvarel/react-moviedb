  // const createBookmarkHandler = async (movie) => {
  //   const response = await fetch('https://react-moviedb-29ac2-default-rtdb.firebaseio.com/bookmarks.json', {
  //     method: 'POST',
  //     body: JSON.stringify(movie),
  //     headers: {
  //       'Content-type': 'application/json'
  //     }
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // }

  // const removeFavoriteMovieHandler = async (id) => {
  //   await fetch(`https://react-moviedb-29ac2-default-rtdb.firebaseio.com/favoriteMovies/${id}.json`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-type': 'application/json'
  //     }
  //   });
  // };
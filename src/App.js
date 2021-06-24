import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';


function App() {
  const [selection, setSelection] = useState(false);

  const selectHandler = () => {
    setSelection(true);
  };

  const backHandler = () => {
    setSelection(false);
  };

  return (
    <>
      <Header />
      <main>
        {!selection && <Home onSelect={selectHandler} />}
        {selection && (
          <MovieDetails
            onBack={backHandler} />)}
      </main>
      <Footer />
    </>
  );
}

export default App;

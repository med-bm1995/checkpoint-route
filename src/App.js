import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { moviesData } from './Components/MoviesData';
import SearchMovie from './Components/SearchMovie';
import MoviesList from './Components/MoviesList';
import AddMovie from './Components/AddMovie';
import Description from './Components/description';
import './App.css';

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">

      <Router>
        <button > <Link to="/home">Home</Link></button>

        <Switch>
          <Route exact path="/home" component={SearchMovie}>
            <SearchMovie
              setNameSearch={setNameSearch}
              ratingSearch={ratingSearch}
              setRatingSearch={setRatingSearch}
            />

            <MoviesList
              moviesList={moviesList}
              nameSearch={nameSearch}
              ratingSearch={ratingSearch}
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <AddMovie addNewMovie={addNewMovie} />
            </div>
          </Route>
          <Route path="/description/:movieId" component={Description} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;

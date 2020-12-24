import React from 'react';

import MovieCard from './MovieCard';

const MoviesList = ({ moviesList, nameSearch, ratingSearch }) => {
    return (
        <div>
            {moviesList
                .filter(
                    (el) =>
                        el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
                        el.rating >= ratingSearch
                )
                .map((el, i) => (
                    <MovieCard key={i} movie={el} />
                ))}
        </div>
    );
};

export default MoviesList;

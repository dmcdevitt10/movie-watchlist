import React from "react";

const MovieCard = ({ movie, addMovie, watchlist, removeMovie }) => {
  const inWatchlist = watchlist.filter((mov) => {
    return mov.id === movie.id;
  });

  return (
    <div className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="movie pic"
        />
        <h3>{movie.original_title}</h3>
      </div>
      {inWatchlist.length === 0 ? (
        <button onClick={() => addMovie(movie)}>Add to List</button>
      ) : (
        <button onClick={() => removeMovie(movie)}>Remove</button>
      )}
    </div>
  );
};

export default MovieCard;

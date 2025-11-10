import React from "react";

const MovieList = ({ movies }) => {
  console.log("movies:", movies);
  if (!movies || movies.length === 0) {
    return null;
  }
  return (
    <div className="mt-80 ml-40 relative z-40">
      <div className="flex gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide w-[90vw] no-scrollbar">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
              alt={movie.original_title}
              className="w-56 h-36 object-cover rounded-md"
            />
            <div className="w-56 h-10 -mt-10 text-center flex items-center justify-center font-semibold">
              {movie.original_title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

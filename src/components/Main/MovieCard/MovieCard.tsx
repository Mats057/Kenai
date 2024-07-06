import React from "react";
import fakeDb from "../../../../public/fakeDb.json";
import Movie from "../../../interfaces/Movie";
import { FaRegStar, FaStar } from "react-icons/fa6";

const movies: Movie[] = Object.values(fakeDb.movies) as Movie[];

function MovieCard({ id }: { id: number }) {
  const movie = movies[id];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div
      className="flex flex-col justify-end select-none h-64 w-[168px] bg-cover bg-top rounded-lg"
      style={{ backgroundImage: `url(${movie.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"></div>
      <div className="z-10 m-4">
        <div className="z-10 bg-dark20 max-w-fit px-2 my-2 rounded-tl-xl rounded-br-xl text-brand text-[8px] font-semibold">
          <p>{movie.gender}</p>
        </div>
        <div className="flex text-dark40 gap-2 text-[10px] my-2">
          {Array.from({ length: movie.stars }).map((_, index) => (
            <FaStar key={index} />
          ))}
          {Array.from({ length: 5 - movie.stars }).map((_, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
        <p className="text-[12px]">{movie.title}</p>
      </div>
    </div>
  );
}

export default MovieCard;

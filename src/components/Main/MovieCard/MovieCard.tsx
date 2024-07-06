import fakeDb from "../../../assets/fakeDb.json";
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
      className="flex flex-col cursor-pointer justify-end select-none h-64 w-[168px] bg-cover bg-top rounded-lg hover:scale-110 transition-all lg:h-[350px] lg:w-[200px]"
      style={{ backgroundImage: `url(${movie.image})` }}
    >
      <div className="absolute w-[168px] inset-0 bg-gradient-to-t rounded-lg from-black to-transparent z-0 lg:h-[350px] lg:w-[200px]"></div>
      <div className="z-10 m-4">
        <div className="z-10 bg-dark20 max-w-fit px-2 my-2 rounded-xl text-brand text-[8px] font-semibold lg:text-base">
          <p>{movie.gender}</p>
        </div>
        <div className="flex text-dark40 gap-2 text-[10px] my-2 lg:text-base">
          {Array.from({ length: movie.stars }).map((_, index) => (
            <FaStar key={index} className="hover:scale-110 transition-all"/>
          ))}
          {Array.from({ length: 5 - movie.stars }).map((_, index) => (
            <FaRegStar key={index} className="hover:scale-110 transition-all"/>
          ))}
        </div>
        <p className="text-[12px] lg:text-xl">{movie.title}</p>
      </div>
    </div>
  );
}

export default MovieCard;

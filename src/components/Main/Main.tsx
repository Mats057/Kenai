import Header from "./Header/Header";
import Carousel from "react-multi-carousel";
import fakeDb from "../../../public/fakeDb.json";
import "react-multi-carousel/lib/styles.css";
import { ImClock } from "react-icons/im";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import MovieCard from "./MovieCard/MovieCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function Main() {
  return (
    <div className="bg-dark10 min-h-svh bg-[url(../../../public/image.png)] bg-cover bg-center vignette text-white">
      <Header />
      <main className="py-12 px-4">
        <div className="bg-dark20 inline-block px-4 rounded-tl-xl rounded-br-xl text-brand font-semibold">
          <p>Ação/Aventura</p>
        </div>
        <div className="flex gap-6 mt-4 text-center items-center">
          <div className="flex text-brand gap-2 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <ImClock />
            <span>1h 57m</span>
          </div>
        </div>
        <section className="mt-6 mb-14 font-semibold">
          <h1 className="mb-4 text-4xl">Batman</h1>
          <p>
            Gotham City enfrenta uma nova ameaça, e Bruce Wayne assume o papel
            do Cavaleiro das Trevas para deter uma organização criminosa. Em
            meio a seus próprios demônios internos, Wayne luta para salvar a
            cidade da iminente escuridão eterna.
          </p>
          <button className="my-8 w-full rounded-md py-2 text-dark10 bg-brand">
            Assistir Agora
          </button>
        </section>
        <section>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            infinite={true}
            arrows={false}>
            {Object.values(fakeDb.movies).map((movie, id) => {
              return <MovieCard key={id} id={id} />;
            })}

          </Carousel>
        </section>
      </main>
    </div>
  );
}

export default Main;

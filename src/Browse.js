import { useNavigate } from "react-router-dom";
import Header from "./Header";
import PromoVideo from "./PromoVideo";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import { useEffect, useMemo, useState } from "react";
import { API_OPTIONS } from "./utils/constants";
import MovieList from "./MovieList";
import usePopularMovies from "./hooks/usePopularMovies";
import useUpComingMovies from "./hooks/useUpComingMovies";

const Browse = () => {
  const navigate = useNavigate();
  const [movieLink, setMovieLink] = useState("");
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  const NPmovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const Popmovies = useSelector((store) => store.movies?.popularMovies);
  const UpComingmovies = useSelector((store) => store.movies?.upComingMovies);

  const promoMovie = useMemo(() => {
    if (!NPmovies?.length) return null;
    const randomIndex = Math.floor(Math.random() * NPmovies.length);
    return NPmovies[randomIndex];
  }, [NPmovies]);

  const id = promoMovie?.id;

  useEffect(() => {
    const promoVideolink = async () => {
      if (!id) return;
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          API_OPTIONS
        );
        const data = await res.json();
        setMovieLink(data.results[1].key);
      } catch (err) {
        console.error("Error fetching promo video:", err);
      }
    };
    promoVideolink();
  }, [id]);

  const handleClick = () => {
    signOut(auth).then(() => navigate("/"));
  };

  if (!promoMovie) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="bg-gray-900 w-screen min-h-screen overflow-x-hidden scrollbar-hide">
      <div className="fixed top-0 left-0 w-full h-full z-20">
        <Header />
        <button
          onClick={handleClick}
          className=" absolute top-0 right-0 m-6 z-50 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 "
        >
          Logout
        </button>
      </div>
      <div className="w-[250vh] h-[160vh] rounded-xl -ml-40 -mt-10 -z-10">
        <PromoVideo movieLink={movieLink} />
      </div>
      <div className=" absolute w-full h-full top-0 left-0">
        <VideoTitle
          originalTitle={promoMovie?.original_title}
          overview={promoMovie?.overview}
        />
      </div>
      <div className="flex relative  m-5 -mt-96">
        <div className="-mt-96">
          <div className="-mt-36 ml-48">
          <button className="bg-gray-200 rounded-lg px-8 py-3 m-5 font-semibold text-gray-700 shadow-lg shadow-black">Play</button>
          <button className=" bg-gray-200 opacity-50 rounded-lg px-8 py-3 font-semibold text-black shadow-lg shadow-black ">ℹ️info</button>
        </div></div>
      </div>
      <div className=" flex absolute w-full h-full top-0 left-0 mt-60 ml-16 ">
        <div className="mt-72">
          <div className="text-white absolute text-3xl font-bold">
            Trending
            <div className="absolute -mt-64 text-lg font-medium">
              <MovieList movies={NPmovies} />
            </div>
          </div>

          <div className="text-white absolute mt-64 text-3xl font-bold">
            Popular
            <div className="absolute -mt-72 text-lg font-medium">
              <MovieList movies={Popmovies} />
            </div>
          </div>

          <div className="text-white absolute mt-96 text-3xl font-bold">
            <div className="mt-28">
              UpComing
              <div className="absolute -mt-72 text-lg font-medium">
                <MovieList movies={UpComingmovies} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;

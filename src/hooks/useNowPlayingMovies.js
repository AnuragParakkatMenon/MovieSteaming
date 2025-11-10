import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovie } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingMovies = () => {
 const dispatch = useDispatch();

  const MovieList = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)
    const json = await data.json()
    dispatch(addNowPlayingMovie(json.results))
  }

  useEffect(()=>{
    MovieList()
  },[])

}

export default useNowPlayingMovies


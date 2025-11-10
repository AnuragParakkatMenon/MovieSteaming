

import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpComingMovie } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useUpComingMovies = () => {
 const dispatch = useDispatch();

  const MovieList = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
    const json = await data.json()
    dispatch(addUpComingMovie(json.results))
  }

  useEffect(()=>{
    MovieList()
  },[])

}

export default useUpComingMovies


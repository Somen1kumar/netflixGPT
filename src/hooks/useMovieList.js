import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_USER_AUTHENTICATION, MOVIELISTURL, UPCOMINGMOVIE, TOP_RATED } from '../utils/constants';
import { addMovieReducer, addPopularMovie, addTopRatedMovie } from '../utils/movieReducer';

const useMovieList = () => {
    const dispatch = useDispatch();

  useEffect(() =>{

    try {
      fetchMovies(MOVIELISTURL, 'latest');
    } catch (error) {
      console.log(error);
    }
  },[]);
  const fetchMovies = async (movieURL, flag) =>{
    const fetchMovie= await fetch(movieURL, FETCH_USER_AUTHENTICATION);
    const data = await fetchMovie.json();
    switch (flag) {
      case 'latest':
        dispatch(addMovieReducer(data.results));
        fetchMovies(UPCOMINGMOVIE, 'upcoming');
        break;
      case 'upcoming': 
        dispatch(addPopularMovie(data.results));
        fetchMovies(TOP_RATED, 'topRated');
        break;
      case 'topRated':
        dispatch(addTopRatedMovie(data.results));
        break;
      default: 
        break;
    }
  }
}

export default useMovieList

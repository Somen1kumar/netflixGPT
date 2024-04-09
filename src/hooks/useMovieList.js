import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_USER_AUTHENTICATION, MOVIELISTURL, UPCOMINGMOVIE, TOP_RATED, POPULAR_MOVIES } from '../utils/constants';
import { addMovieReducer, addPopularMovie, addTopRatedMovie, addNewPopularMovies } from '../utils/movieReducer';

const useMovieList = () => {
    const dispatch = useDispatch();

  useEffect(() =>{

    fetchMovies(MOVIELISTURL, 'latest');
    
  },[]);
  const updateSessionData = (lengthOfMovie) => {
    if(!sessionStorage.getItem('MovieIndex')) {
      sessionStorage.setItem('MovieIndex', Math.floor(Math.random() * lengthOfMovie ));
    }
  }
  const fetchMovies = async (movieURL, flag) =>{
    try {
      const fetchMovie= await fetch(movieURL, FETCH_USER_AUTHENTICATION);
      const data = await fetchMovie.json();
      switch (flag) {
        case 'latest':
          dispatch(addMovieReducer(data.results));
          updateSessionData(data?.results?.length - 1);
          fetchMovies(UPCOMINGMOVIE, 'upcoming');
          break;
        case 'upcoming': 
          dispatch(addPopularMovie(data.results));
          fetchMovies(TOP_RATED, 'topRated');
          break;
        case 'topRated':
          dispatch(addTopRatedMovie(data.results));
          fetchMovies(POPULAR_MOVIES, 'popular');
          break;
        case 'popular':
          dispatch(addNewPopularMovies(data.results));
          break;
        default: 
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
  
}

export default useMovieList

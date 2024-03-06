import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_USER_AUTHENTICATION, MOVIELISTURL } from '../utils/constants';
import { addMovieReducer } from '../utils/movieReducer';

const useMovieList = () => {
    const dispatch = useDispatch();

  useEffect(() =>{

    try {
      fetchMovies();
      
    } catch (error) {
      console.log(error);
    }
  },[]);
  const fetchMovies = async () =>{
    const fetchMovie= await fetch(MOVIELISTURL, FETCH_USER_AUTHENTICATION);
    const data = await fetchMovie.json();
    //console.log(data.results); 
    dispatch(addMovieReducer(data.results));
  }
}

export default useMovieList

import React, { useEffect, useState } from 'react'
import useMovieList from '../../hooks/useMovieList';
import MainContainers from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const moviesLoaded = useSelector(itr => itr.movieHolder.movies);
  useMovieList();
  if(!moviesLoaded.length > 0) return;
  return (
    <React.Fragment>
      {
        <React.Fragment>
          <MainContainers />
          <SecondaryContainer />
        </React.Fragment>
      }
      
    </React.Fragment>
  )
}

export default Homepage

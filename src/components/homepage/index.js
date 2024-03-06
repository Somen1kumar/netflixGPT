import React, { useEffect, useState } from 'react'
import useMovieList from '../../hooks/useMovieList';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Homepage = () => {
    useMovieList();
  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
      
    </div>
  )
}

export default Homepage

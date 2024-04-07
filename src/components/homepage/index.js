import React, { useEffect, useState } from 'react'
import useMovieList from '../../hooks/useMovieList';
import MainContainers from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import GptSearchContainer from '../GptSearch';

const Homepage = () => {
  const toggltToSearchAi = useSelector(itr => itr.GptLayoutSwitch.showGptLayout);
    useMovieList();
  return (
    <React.Fragment>
      {
        // toggltToSearchAi ? 
        // <GptSearchContainer />
        // :
        <React.Fragment>
          <MainContainers />
          <SecondaryContainer />
        </React.Fragment>
      }
      
    </React.Fragment>
  )
}

export default Homepage

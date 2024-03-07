import React from 'react'
import Index from '../movieList'
import { useSelector } from 'react-redux';
import configurations from '../../utils/config';

const SecondaryContainer = () => {
  const movieList = useSelector(itr => itr.movieHolder.movies);
  const upComingMovies = useSelector(itr => itr.movieHolder.upComingMovies);
  const topRatedMovies = useSelector(itr => itr.movieHolder.topRated);
  const configLanguage = useSelector(itr => itr.Language.configureLanguage);


  console.log(movieList);
  //'NowPlayingLabel' : 'अभी चल रहा है',
  // 'UpcomingMoviesLabel' : 'आगामी फिल्में',
  // 'TopRatedLabel'
  return (
    <div className='bg-black'>
      <div className='popular container max-w-full pl-7 m-0 desk:-mt-48 relative'>
        {movieList.length > 0 && <Index title={configurations[configLanguage].NowPlayingLabel} movieList={movieList} />}
        {upComingMovies.length > 0 && <Index title={configurations[configLanguage].UpcomingMoviesLabel} movieList={upComingMovies} />}
        {topRatedMovies.length > 0 && <Index title={configurations[configLanguage].TopRatedLabel} movieList={topRatedMovies} />}

      </div>
    </div>
  )
}

export default SecondaryContainer

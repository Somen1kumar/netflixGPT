import React, { useEffect, useState } from 'react'
import VideoPlayer from './VideoPlayer';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import configurations from '../../utils/config';
import {addToggleEnabler} from '../../utils/homeVideoReducer'
import { addCurrentMovie } from '../../utils/currentMovieReducer';

const MainContainers = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const movies = useSelector(itr => itr.movieHolder.movies);
    const configLanguage = useSelector(itr => itr.Language.configureLanguage);
    const [currentMovieSet,setCurrentMovies] = useState('');
    const currentIndex = sessionStorage.getItem('MovieIndex') ? Number(sessionStorage.getItem('MovieIndex')): 0 ;
    const currentMovie = movies[currentIndex];
    useEffect(() =>{
        setCurrentMovies(currentMovie);
    }, []);
    if(currentMovieSet.length > 0) return;
    const MoreInfo =() => {
        const {id } = currentMovieSet;
        const currentMovie = movies.filter(itr => itr.id === id)[0];
        dispatch(addCurrentMovie(currentMovie));
        navigate(`/browse/${id}`);
    }
    const {original_title, overview,id } = currentMovie;
  return (
    <div>
        <div className='absolute w-screen aspect-video title pt-0 bg-gradient-to-r from-black'>
            <div className='w-fit pt-[20%] pl-[5%] text-white'>
                <h1 className='w-fit text-base tab:text-2xl font-bold font-sans pb-2'>{original_title}</h1>
                <div className='w-[30%] font-sans hidden desk:block h-[100px] overflow-hidden '><p className='max-h-[100px]'>{overview}</p></div>
                <div className='pt-3 hidden tab:block'>
                    <button className='px-4 py-1 bg-gray-500 rounded-[4px] bg-opacity-50' onClick={MoreInfo}>{configurations[configLanguage].MoreInfoLabel}</button>
                </div>
            </div>
        </div>
        <VideoPlayer movieId={id} />
      
    </div>
  )
}

export default MainContainers

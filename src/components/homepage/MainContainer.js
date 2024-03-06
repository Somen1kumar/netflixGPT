import React from 'react'
import VideoPlayer from './VideoPlayer';
import { useSelector } from 'react-redux';


const MainContainer = () => {
    const movies = useSelector(itr => itr.movieHolder);
    if(!movies.length > 0) return;
    const lengthOfMovie = movies.length - 1;
    const currentMovie = movies[Math.floor(Math.random() * lengthOfMovie )];
    console.log("current", movies.length - 1);
    const {original_title, overview,id } = currentMovie;
  return (
    <div>
        <div className='absolute w-screen aspect-video title pt-0 bg-gradient-to-r from-black'>
            <div className='w-fit pt-[20%] pl-[5%] text-white'>
                <h1 className='w-fit text-base tab:text-2xl font-bold font-sans pb-2'>{original_title}</h1>
                <p className='w-[30%] font-sans hidden desk:block'>{overview}</p>
                <div className='pt-3'>
                    <button className='px-4 py-1 bg-white rounded-[4px] text-black hover:opacity-85 '> Play</button>
                    <button className='ml-2 px-4 py-1 bg-gray-500 rounded-[4px] bg-opacity-50'>More Info</button>
                </div>
            </div>
        </div>
        <VideoPlayer movieId={id} />
      
    </div>
  )
}

export default MainContainer

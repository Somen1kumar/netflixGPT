import React, { useEffect } from 'react'
import VideoPlayer from './VideoPlayer';
import { useSelector } from 'react-redux';


const MainContainers = () => {
    // useEffect(() => {
    //     if(typeof document !== 'undefined' && !!document.getElementById('youtube-player'))
    //     document.getElementById('youtube-player').addEventListener('onStateChange', 'player_state_changed');

    // },[])
    function player_state_changed(state) {
        /* This event is fired whenever the player's state changes.
           Possible values are:
           - unstarted (-1)
           - ended (0)
           - playing (1)
           - paused (2) 
           - buffering (3)
           - video cued (5). 
           When the SWF is first loaded it will broadcast an unstarted (-1) event.
           When the video is cued and ready to play it will broadcast a video cued event (5).
        */
      
        if (state === 1 || state === 2) {
          alert('the "play" button *might* have been clicked');
        }
      
      }
    const movies = useSelector(itr => itr.movieHolder.movies);
    if(!movies.length > 0) return;
    const lengthOfMovie = movies.length - 1;
    const currentMovie = movies[Math.floor(Math.random() * lengthOfMovie )];
    console.log("current", movies.length - 1);
    const {original_title, overview,id } = currentMovie;
    const togglePlayer = () => {

    }
  return (
    <div>
        <div className='absolute w-screen aspect-video title pt-0 bg-gradient-to-r from-black'>
            <div className='w-fit pt-[20%] pl-[5%] text-white'>
                <h1 className='w-fit text-base tab:text-2xl font-bold font-sans pb-2'>{original_title}</h1>
                <div className='w-[30%] font-sans hidden desk:block h-[100px] overflow-hidden '><p className='max-h-[100px]'>{overview}</p></div>
                <div className='pt-3 hidden tab:block'>
                    <button className='px-4 py-1 bg-white rounded-[4px] text-black hover:opacity-85 ' onClick={togglePlayer}> Play</button>
                    <button className='ml-2 px-4 py-1 bg-gray-500 rounded-[4px] bg-opacity-50'>More Info</button>
                </div>
            </div>
        </div>
        <VideoPlayer movieId={id} />
      
    </div>
  )
}

export default MainContainers

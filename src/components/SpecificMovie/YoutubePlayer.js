import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux';
import SpecificVideoPlayer from './SpecificVideoPlayer';


const VideoPlayer = () => {
    // const [videoData,setVideoData] = useState('');
    // const movieList = useSelector(itr => itr.currentMovie.currentMovieVideos);

    useEffect(() =>{
        try {
          fetchMoviesVideo();
          
        } catch (error) {
          console.log(error);
        }
      },[]);
    const fetchMoviesVideo = () =>{
        // const totalYoutubeVideo = movieList?.results.filter(itr => itr.site === "YouTube")
        
        // setVideoData(totalYoutubeVideo);
    }
    // if(!videoData[0]) return;
  return (
    <div className='video-list-container w-full pt-9 pb-9'>
        {
            <SpecificVideoPlayer />
        }
    </div>
  )
}

export default VideoPlayer

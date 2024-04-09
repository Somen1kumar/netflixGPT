import React,{useEffect, useState} from 'react'
import { FETCH_USER_AUTHENTICATION } from '../../utils/constants';


const VideoPlayer = (props) => {
    const [videoData,setVideoData] = useState('');

    useEffect(() =>{
        try {
          fetchMoviesVideo();
          
        } catch (error) {
          console.log(error);
        }
      },[]);
    const fetchMoviesVideo = async () =>{
        const {movieId} = props;
        const VIDEOURL = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
        const fetchVideo= await fetch(VIDEOURL, FETCH_USER_AUTHENTICATION);
        const videoData = await fetchVideo.json();
        const filterVideoObject = videoData && videoData.results.filter(itr => itr.type === "Trailer");
        const videoKeyObject = filterVideoObject.length > 0 ? filterVideoObject[0] : videoData.results[0];
        setVideoData(videoKeyObject)
    }
    const {key} = videoData;
  return (
    <div>
        <iframe 
            className='w-screen aspect-video'
            src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&si=eNLAeARGzI-yIc9b&enablejsapi=1`}
            title="YouTube video player"
            id = 'youtube-player'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoPlayer

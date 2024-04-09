import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';

const SpecificVideoPlayer = (props) => {
  const [videoData,setVideoData] = useState('');
  let totalYoutubeVideo = '';
  const movieList = useSelector(itr => itr.currentMovie.currentMovieVideos);
  if(typeof window !== 'undefined' && window.location && window.location.pathname) {
    const currentId = Number(window.location.pathname.replace('/browse/',''));
    if (currentId === Number(movieList.id)) {
      totalYoutubeVideo = movieList?.results.filter(itr => itr.site === "YouTube");
      // setVideoData(totalYoutubeVideo[0]);
    }
  }
        // setVideoData(totalYoutubeVideo);
  if(!totalYoutubeVideo[0]) return;
  const {key} = totalYoutubeVideo[0];
  console.log('newKey', totalYoutubeVideo[0]);
  return (
    <div>
      {key && <iframe width="560" height="315"
            className=''
            src={`https://www.youtube.com/embed/${key}`}
            title="YouTube video player"
            id = 'youtube-player'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
    }
    </div>
  )
}

export default SpecificVideoPlayer

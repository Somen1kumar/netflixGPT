import React from 'react'
import {useSelector} from 'react-redux';

const SpecificVideoPlayer = (props) => {
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
  return (
    <div className='flex overflow-x-auto snap-x snap-mandatory'>
      {totalYoutubeVideo && totalYoutubeVideo.length >0 &&
      totalYoutubeVideo.map((item) => {
        return(
          <div key={item.key} className='snap-start' >
            <iframe
              className='mx-3 w-[350px] h-[210px] tab:w-[704px] tab:h-[400px] tab:mx-8 desk:w-[690px] desk:h-[390px] desk:mx-4'
              src={`https://www.youtube.com/embed/${item.key}`}
              title="YouTube video player"
              id = 'youtube-player'
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
          </iframe>
          </div>
        )
      })
    }
    </div>
  )
}

export default SpecificVideoPlayer

/*
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
    
*/

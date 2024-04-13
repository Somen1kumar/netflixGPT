import React  from 'react'
import { useSelector } from 'react-redux'
import { POSTER_URL, SPECIFICMOVIEURL } from '../../utils/constants';
import './styles/index.css'
import configurations from '../../utils/config';
import useActorsList from '../../hooks/useActorsList';
import ActorCard from './actorCard';
import useVideoList from '../../hooks/useSpecificVideo';
import YoutubePlayer from './YoutubePlayer';
import { useNavigate } from 'react-router-dom';


const Index = (props) => {
    const navigate = useNavigate();
    let currentMovie = useSelector(itr => itr.currentMovie.currentMovieData);
    const configLanguage = useSelector(itr => itr.Language.configureLanguage);
    const currentActors = useSelector(itr => itr.currentMovie.currentActorsData.cast);
    const currentVideo = useSelector(itr => itr.currentMovie.currentMovieVideos.results);
    if (!currentMovie) {
      navigate('/browse');
    }
    useActorsList(currentMovie.id);
    useVideoList(currentMovie.id);
    const {backdrop_path,poster_path,overview,original_title,release_date} = currentMovie;
    return (
      <div className='relative'>
        <div className='first-child'>
          <img 
            tabIndex={0}
            className='w-full h-screen object-cover snap-start '
            src={SPECIFICMOVIEURL+backdrop_path}
            alt={`${original_title}`}
          />
          <div className='absolute top-0 w-full h-screen bg-gradient-to-r desk:bg-gradient-to-b from-black '></div>
          <div>
            <div className=' desk:flex pt-0 -mt-24 bg-black flex-col overflow-x-auto snap-x snap-mandatory'>
              <div className='flex w-max pl-4 '>
                {
                  currentActors && currentActors.length > 0 && currentActors.map(itr => <ActorCard key={itr.id} profile_path={itr.profile_path} original_name={itr.original_name} />)
                }
              </div>
            </div>
          </div>
        </div>
        <div className='second-child absolute top-[100px]'>
          <div className='desk:flex'>
          <div className='left-content flex justify-center desk:block desk:pl-16'>
            <img 
                tabIndex={0}
                className='w-[80px] h-[80px] rounded-[50px] tab:w-[200px] tab:h-[200px] tab:rounded-[100px] desk:w-72 desk:h-[80vh] desk:max-h-[300px] desk:min-h-44 object-cover snap-start desk:rounded-lg '
                src={POSTER_URL+poster_path}
                alt={`${original_title} poster`}
              />
          </div>
          <div className='right-content pl-3 desk:max-w-[50vw] '>
            <h1 className='text-white font-sans text-base tab:text-2xl font-bold'>{original_title}</h1>
            <p className='mt-4 text-white font-sans text-base max-w-[80%] h-40 overflow-auto tab:h-fit desk:max-h-24'>{overview}</p>
            <div className='pt-4 text-white font-sans flex flex-row'>
              <div className='text-lg font-bold pr-3'>{configurations[configLanguage].ReleaseDateLabel}</div>
              <div className='text-base leading-[30px]'>{release_date}</div>
            </div>
          </div>
          </div>
        
        </div>
        <div className='video-player-block bg-black'>
              {currentVideo && currentVideo.length > 0 && <YoutubePlayer />}
        </div>
      </div>
    );
}

export default Index

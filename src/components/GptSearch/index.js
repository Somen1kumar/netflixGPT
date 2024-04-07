import React, { useRef, useState } from 'react'
import { BACKGROUND_IMAGE } from '../../utils/constants';
import configurations from '../../utils/config';
import { useSelector } from 'react-redux';
// import {UseGptAI} from '../../hooks/useGptAI';
// import { addFilteredMovies } from '../../utils/gptSearchReducer';
import MovieCart from '../movieList/movieCart';

const GptSearchContainer = () => {
  // const dispatch = useDispatch();
  const configLanguage = useSelector(itr => itr.Language.configureLanguage);
  const movieList = useSelector(itr => itr.movieHolder.movies);
  // const upComingMovies = useSelector(itr => itr.movieHolder.upComingMovies);
  // const topRatedMovies = useSelector(itr => itr.movieHolder.topRated);
  // const uniqueMovies = movieList;
  const [allMoviesList] = useState(movieList);
  // dispatch(addFilteredMovies(movieList));
  const [filterMovies, setfilterMovies] = useState('');
  const inputData = useRef(null);
  console.log(configLanguage);
    const CallGpt = () => {
      const searchText = inputData.current.value;
      console.log('searchText',searchText);
      if(searchText === '') {
        setfilterMovies('');
      }
      const map = allMoviesList.filter(itr => itr.original_title.toLowerCase().includes(searchText.toLowerCase()));
      setfilterMovies(map);

    }
  return (
    <React.Fragment>

    <div className='w-full flex justify-center absolute top-[30%]  '>

      <div className='w-[70%] desk:w-[40%] bg-transparent-Background p-4 '>
        <form className='' onSubmit={(e) => e.preventDefault()}>
            <input type='text' ref={inputData}  placeholder={configurations[configLanguage].GptInputPlaceHolder} className='w-[75%] mr-2 h-[48px] px-1 text-gray-700 rounded' />
            <button className='w-[20%] h-[48px] bg-Btn-Primary text-white font-serif text-base rounded-md' onClick={CallGpt}>{configurations[configLanguage].searchText}</button>
        </form>
      </div>
      <div className='absolute overflow-hidden left-4 right-4 top-28 flex flex-col overflow-x-auto snap-x snap-mandatory no-scrollbar'>
        <div className='scrollView'>
          <div className='flex w-max'>
            {
              !!filterMovies && filterMovies.length > 0 && 
              filterMovies.map(itr => <MovieCart key={itr.id} movie={itr} posterKey={itr.poster_path} original_title={itr.original_title} />)
            }
          </div>
        </div>
      </div>
    </div>
    <div>
        <img src= {BACKGROUND_IMAGE}
        alt='background'
        className='h-[100vh] mobLand:h-[100%] desktop:h-[100%] object-cover' />
    </div>

</React.Fragment>
  )
}

export default GptSearchContainer;

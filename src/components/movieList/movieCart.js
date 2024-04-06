import React from 'react'
import { IMAGE_URL } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCurrentMovie } from '../../utils/currentMovieReducer'

const MovieCart = (props) => {
  const dispatch = useDispatch();
  const {movie ,posterKey,original_title} = props;
  const navigate = useNavigate();
  const appendDataUser = () => {
    dispatch(addCurrentMovie(movie));
    navigate(`/browse/${movie.id}`);
  }
  return (
    <div className='pr-2 w-60 h-[150px]'>
        <div className='relative overflow-hidden cursor-pointer' onClick={appendDataUser}>
          <img 
          tabIndex={0}
          className='w-60 h-[150px] object-cover snap-start '
          src={IMAGE_URL+posterKey}
          alt={`${original_title} poster`}
          />
          <div className='absolute w-full h-fit bottom-0 bg-gradient-to-t from-black'>
          <h3 className='w-full pl-1 pb-4 pt-24 text-white font-sans text-base transition-all duration-300 delay-100 hover:pb-7 '>
            {original_title}</h3>
          </div>
        </div>
      
    </div>
  )
}

export default MovieCart

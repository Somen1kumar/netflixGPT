import React from 'react'
import { IMAGE_URL } from '../../utils/constants'

const ActorCard = (props) => {
  const {profile_path,original_name} = props;
  const appendDataUser = () => {
    // dispatch(addCurrentMovie(movie));
    // navigate(`/browse/${movie.id}`);
  }
  return (
    <div className='pr-4 w-36 h-[200px]'>
        <div className='relative overflow-hidden cursor-pointer' onClick={appendDataUser}>
          <img 
          tabIndex={0}
          className='w-36 h-[200px] object-cover snap-start rounded-md '
          src={IMAGE_URL+profile_path}
          alt={`${original_name} `}
          />
          <div className='absolute w-full h-fit bottom-0 bg-gradient-to-t from-black'>
          <h3 className='w-full pl-1 pb-4 pt-24 text-white font-sans text-base transition-all duration-300 delay-100 hover:pb-7 '>
            {original_name}</h3>
          </div>
        </div>
      
    </div>
  )
}

export default ActorCard;

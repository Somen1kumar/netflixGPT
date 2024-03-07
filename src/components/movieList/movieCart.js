import React from 'react'
import { IMAGE_URL } from '../../utils/constants'

const MovieCart = ({posterKey,original_title}) => {
  return (
    <div className='pr-2 w-60 h-[150px]'>
        <img 
        tabIndex={0}
        className='w-60 h-[150px] object-cover snap-start '
        src={IMAGE_URL+posterKey}
        alt={original_title}
        />
      
    </div>
  )
}

export default MovieCart

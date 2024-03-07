import React from 'react'
import MovieCart from './movieCart';

const Index = (props) => {

    const {movieList,title} = props;
    
  return (
    <div>
        <h1 className='py-4 font-serif text-white text-xl desk:text-2xl w-fit'>{title}</h1>
        <div className='flex flex-col overflow-x-auto snap-x snap-mandatory no-scrollbar'>
            <div className='popular_block'>
                <div className='flex w-max'>
                    {
                        movieList.map(itr => <MovieCart key={itr.id} posterKey={itr.poster_path} title={itr.original_title} />)
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default Index;

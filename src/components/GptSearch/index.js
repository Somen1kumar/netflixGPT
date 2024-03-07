import React from 'react'
import { BACKGROUND_IMAGE } from '../../utils/constants';
import configurations from '../../utils/config';
import { useSelector } from 'react-redux';

const GptSearchContainer = () => {
  const configLanguage = useSelector(itr => itr.Language.configureLanguage);
  console.log(configLanguage);
    const callGpt = () => {

    }
  return (
    <React.Fragment>

    <div className='w-full flex justify-center absolute top-[30%]  '>

      <div className='w-[70%] desk:w-[40%] bg-transparent-Background p-4 '>
        <form className='' onSubmit={(e) => e.preventDefault()}>
            <input type='text'  placeholder={configurations[configLanguage].GptInputPlaceHolder} className='w-[75%] mr-2 h-[48px] px-1 text-gray-700 rounded' />
            <button className='w-[20%] h-[48px] bg-Btn-Primary text-white font-serif text-base rounded-md' onClick={callGpt}>{configurations[configLanguage].searchText}</button>
        </form>
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

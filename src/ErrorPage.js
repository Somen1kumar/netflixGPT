import React from 'react'
import { LOGO_USER } from './utils/constants'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();
    const HomepageRedirect = () => {
        navigate('/');
    }
  return (
    <div className='h-screen bg-black'>
        <div className='w-fit desktop:w-[330px] h-[55px] cursor-pointer'>
            <img src={LOGO_USER}
                alt='logo'
                className='h-16 desk:h-28'
            />
        </div>
        <div className='flex flex-col my-auto h-fit justify-center'>
        <h1 className='text-center font-bold text-[120px] text-white'>4😲4</h1>
        <h4 className='text-center font-bold text-3xl text-white'>Page Not Found</h4>
        <h5 className='text-center font-bold text-2xl text-white max-w-[800px] mx-auto pt-9 tab:w-[80%]'>This Page you are looking for Might have been removed had its name changed or 
            is temporarily unavailable
        </h5>
        <button className='px-2 py-2 text-white text-base border-2 border-white rounded-md w-56 mx-auto mt-9'
        onClick={HomepageRedirect}>Go Home
        </button>
        </div>
    </div>
  )
}

export default ErrorPage

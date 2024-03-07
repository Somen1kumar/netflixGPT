import React, {useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { deleteUser } from '../../utils/reducer';
import { auth } from '../../utils/firebase';
import {addReducers} from '../../utils/reducer'
import { BACKGROUND_IMAGE, ConfigLanguage, LOGO_USER } from '../../utils/constants';
import { toggleSearchComponent } from '../../utils/gptSearchReducer';
import { updateLanguageReducer } from '../../utils/configSlice';
import configurations from '../../utils/config';


const Header = () => {
    const {email,displayName} = useSelector(itr => itr.credentialHolder);
    const toggleSearch = useSelector(itr => itr.GptLayoutSwitch.showGptLayout);
    const configLanguage = useSelector(itr => itr.Language.configureLanguage);
    const loggedIn = !!email;
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {email, displayName } = user;
              let userInfo = {
                email: email,
                displayName: displayName
              }
              console.log(userInfo);
              dispatch(addReducers(userInfo));
              navigate('/browse')
              // ...
            } else {
              // User is signed out
              // ...
              navigate('/')
            }
          });
          return () => unSubscribe();
    },[])
    const signOutUser = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(deleteUser())
            // navigate('/');

            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    const toggleToGptLayout = () => {
      dispatch(toggleSearchComponent());
    }
    const LanguageChange =(e) => {
      dispatch(updateLanguageReducer(e.target.value));
    }

  return (
    <React.Fragment>
        <div className='absolute w-full bg-gradient-to-b from-black flex justify-between z-[2]'>
            <Link to='/'>
                <div className='w-fit desktop:w-[330px] h-[55px] m-3'>
                    <img src={LOGO_USER}
                    alt='logo'
                    className='h-16'
                    />
                </div>
            </Link>
            <div className='mx-0 my-auto mr-8 flex'>
                {!toggleSearch ? 
                  <div>
                      {loggedIn && <div className='flex flex-row'>
                        <button className='px-3 py-1 mr-[10px] bg-Btn-Primary text-white rounded-md' onClick={toggleToGptLayout} >{configurations[configLanguage].GptSearchLabel}</button>
                        {displayName && <h4 className='pt-[3px] text-[16px] text-white'>{displayName}</h4>} 
                      </div>}
                      </div>
                    :
                      <div className='flex flex-row'>
                        <button className='px-3 py-1 mr-[10px] bg-Btn-Primary text-white rounded-md' onClick={toggleToGptLayout} >{configurations[configLanguage].HomePageLabel}</button>
                      </div>
                }
                {(toggleSearch || !loggedIn) && 
                  <div className='flex flex-row'>
                    <select onChange={LanguageChange} name="Language" defaultValue={'en-US'} id="language" className='p-[6px] desk:px-[26px] desk:py-[6px] bg-transparent text-white border border-white rounded-md' >
                        {/* <option className='text-black' value={'English'}>English</option>
                        <option className='text-black' value={"Hindi"}>Hindi</option> */}
                        {ConfigLanguage.map(itr => <option key={Object.keys(itr)[0]} className='text-black' value={itr[Object.keys(itr)[0]]}>{Object.keys(itr)[0]}</option>
                        
                        )}
                        </select>
                  </div>
                }
                {!loggedIn ? <Link to={'/login'}>
                    <div className='ml-7 p-[6px] px-3 desk:px-[26px] desk:py-[6px] bg-Btn-Primary text-base desk:text-xl text-white rounded-[4px] font-serif' role='button'>
                    {configurations[configLanguage].SignInLabel}
                    </div>
                </Link>
                :
                    
                  !toggleSearch && loggedIn ? 
                    <div onClick={signOutUser} className='ml-[10px] px-[12px] py-[6px] bg-Btn-Primary text-white rounded-[4px] font-serif' role='button'>
                      {configurations[configLanguage].SignOutLabel}
                    </div>
                    :
                    ''
                }
            </div>
        </div>
        {!loggedIn && <div>
            <img src= {BACKGROUND_IMAGE}
            alt='background'
            className='h-[100vh] mobLand:h-[100%] desktop:h-[100%] object-cover' />
        </div>}
  </React.Fragment>
  )
}

export default Header

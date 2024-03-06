import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { validate } from '../../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { addReducers } from '../../utils/reducer';

// rafce = react arrow function component export
const Login = (props) => {
  const {signUpFlag=false} = props;
  const [signIn] = useState(signUpFlag);
  const [errorMessage,setErrorMessage] = useState('');
  const [successRegistration,setsuccessRegistration] = useState(false);
  let emailReference = useRef(null);
  let passwordRef = useRef(null);
  let nameReference = useRef(null);
  const dispatch = useDispatch();


  const clickHandler = () => {
    let emailId = emailReference.current.value;
    let password = passwordRef.current.value;
    let userName = nameReference?.current?.value;
    let validationStatus = validate(emailId, password);
    setErrorMessage('');
    setsuccessRegistration(false)
    if(validationStatus !== true) {
      setErrorMessage(validationStatus);
    }
    else {
      if (signIn) { 
        // Registration 
        registrationFirebase(emailId, password, userName);
      } else {
        emailAuthentication(emailId, password);
      }
    }

  }
  const emailAuthentication = (emailId, password) => {
    signInWithEmailAndPassword(auth, emailId, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      setsuccessRegistration("SignUp is SuccessFull");
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+ '-' + errorMessage);

    })
  }
  const registrationFirebase = (email,password ,userName) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    setsuccessRegistration("Registration is SuccessFull");
    updateProfile(user, {
      displayName: userName
    }).then(() => {
      let {displayName,email } = auth.currentUser;
      let userInfo = {
        email: email,
        displayName: displayName
      }
      console.log(userInfo);
      dispatch(addReducers(userInfo));
        console.log("somen", user);
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+ '-' + errorMessage);
  });
  }
  return (
    <div className='absolute w-full h-full top-24'>
      <div className='w-[80%] h-fit desk:w-[450px] desk:h-auto px-[32px] desk:px-[68px] pt-[60px] pb-10 text-center m-auto bg-transparent-Background'>
        <h1 className='mb-6 font-semibold text-xl text-white '>{!signIn ? 'SignIn': 'Registration' }</h1>
        {errorMessage && <h4 className='my-2 text-red-700 '>{errorMessage}</h4>}
        {successRegistration && <h4 className='my-2 text-green-600 '>{successRegistration}</h4>}
        <form onSubmit={(e) => e.preventDefault() }>
          {signIn && <input type='text' placeholder='Enter your Name' ref={nameReference} autoComplete='email' className='border-[0] rounded bg-gray-600 text-white h-[50px] w-fit desk:w-[314px] py-4 pr-5 pl-0 mb-4'/>}
          <input type='email' ref={emailReference} placeholder='Enter your Email' autoComplete='email' className='border-[0] rounded bg-gray-600 text-white h-[50px] w-fit desk:w-[314px] py-4 pr-5 pl-0 mb-4'/>
          <input type='password' ref={passwordRef} placeholder='Enter your password' className='border-[0] rounded bg-gray-600 text-white h-[50px] w-fit desk:w-[314px] py-4 pr-5 pl-0 mb-6' />
          <input type='submit' onClick={clickHandler} value={'Submit'} className='rounded text-xl font-semibold my-6 w-[80%] desk:w-full p-4 bg-Btn-Primary text-white' />
        </form>
        {!signIn && <div className='flex justify-center'>
            <h5 className='text-white'>{`New to Netflix ?`} </h5>
            <div className='text-white pl-1'>
              <Link to={'/signUp'} >SignUp Now</Link>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Login

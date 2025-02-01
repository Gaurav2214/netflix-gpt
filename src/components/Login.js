import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handledBtnClick = () => {
    let msg;
    if(isSignInForm){
      msg = checkValidateData(email?.current?.value, password?.current?.value);
    } else {
      msg = checkValidateData(email?.current?.value, password?.current?.value, name?.current?.value);
    }
    setErrorMsg(msg);
    if(msg) return false;

    if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
      .then((userCredential) =>{
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
        setErrorMsg(errorCode +" - "+ errorMsg); 
      })
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
        console.log(errorCode +" - "+ errorMsg);
      })
    }
  }

  return (
    <div className='main-container'>
      <Header />
      <div className='background-nf'></div>
      <div className='form-container'>   
        <h1>{isSignInForm ? 'Sign In' : "Sign Up"}</h1>     
        <form onSubmit={(e) => e.preventDefault()} className='login-container'>
          {!isSignInForm && ( 
            <input 
              ref={name}
              type='text' 
              placeholder='Full Name' 
              className='form-control' 
            />
          )}          
          <input ref={email} type='text' placeholder='Email' className='form-control' />
          <input ref={password} type='password' placeholder='Password' className='form-control' />
          <p className='error'>{errorMsg}</p>
          <button className='btn mt-7' onClick={handledBtnClick}>
            {isSignInForm ? 'Sign In' : "Sign Up"}
          </button>
          <p className=' mt-6 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? 
              "New to Netflix? Sign Up Now" : 
              "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
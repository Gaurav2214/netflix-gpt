import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className='main-container'>
      <Header />
      <div className='background-nf'></div>
      <div className='form-container'>   
        <h1>{isSignInForm ? 'Sign In' : "Sign Up"}</h1>     
        <form className='login-container'>
          {!isSignInForm && ( 
            <input 
              type='text' 
              placeholder='Full Name' 
              className='form-control' 
            />
          )}          
          <input type='text' placeholder='Email' className='form-control' />
          <input type='password' placeholder='Password' className='form-control' />
          <button className='btn mt-7'>{isSignInForm ? 'Sign In' : "Sign Up"}</button>
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
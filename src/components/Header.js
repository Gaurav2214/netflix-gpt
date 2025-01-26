import React from 'react'

const Header = () => {
  return (
    <div className="header relative z-10 bg-gradient-to-b from-black">
      <div className='px-8 py-2'>
          <img 
              width="150" height="40" 
              src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Netflix Logo' />
      </div>
      <div className='head-nav'>
        <ul>
          <li>Language</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
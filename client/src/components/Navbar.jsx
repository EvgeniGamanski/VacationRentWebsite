import React from 'react';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <a href='/'> 
         <img src="/assets/logo.png" alt="logo" />
        </a>      

        <div className='navbar_search'>
            <input type="text" placeholder='Search ...' />
        </div>
    </div>
  )
}

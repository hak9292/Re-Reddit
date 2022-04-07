import React from 'react';
import Logo from '../assets/reddit-logo-icon.png';
import './Header.css';
import Button from './Button';
import Avatar from '../assets/default-avatar.webp';


function Header() {
  return (
    <div >
      <header>
        <div className='rereddit-header d-inline-flex justify-content-between'>
         {/* logo */}
         <div>  
            <img src={Logo} alt="rereddit logo" className='rereddit-logo m-2'/>
          </div>
          {/* search box */}
          <div className='d-flex w-100'>
            <form className='rereddit-search text-danger flex-grow-1 w-auto'>
              <div>
                <i class="bi bi-search col-3"></i>
                <input type="search" className='search-bar col-9' placeholder='Search ReReddit' />
              </div>
            </form>
          </div>
          {/* Login/Signup Buttons */}
          <span className='d-inline-flex text-nowrap'>
            <div className='col-6 px-1'>
              <Button outline> Log In </Button>
            </div>
            <div className='col-6 px-1'>
              <Button> Sign Up </Button>
            </div>      
          </span>
          {/* user dropdown */}
          <span className='user-dropdown'>
            <button className='bg-transparent'>
              <div className='container d-inline-flex align-items-center'>
                <div className='col-6 p-1'>
                {/* <i class="bi bi-person-circle"></i> */}
                <img src={Avatar} className='default-avatar'/>
                </div>
                <div className='col-6 p-1'>
                  <i class="bi bi-chevron-down"></i>
                </div>
              </div>

            </button>
          </span>
        </div>
      </header>
    </div>
  );
}

export default Header;
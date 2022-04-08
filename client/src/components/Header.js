import React, { useState } from 'react';
import ClickOutHandler from 'react-clickout-handler';
import Logo from '../assets/reddit-logo-icon.png';
import './Header.css';
import Button from './Button';
import Avatar from '../assets/default-avatar.webp';


function Header() {

  const [userDropdownVisibilityClass, setUserDropdownVisibilityClass] = useState('d-none');

  function toggleUserDropdown() {
    if (userDropdownVisibilityClass === 'd-none') {
      setUserDropdownVisibilityClass('d-block')
    } else {
      setUserDropdownVisibilityClass('d-none')
    }
  }

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
                <i className="bi bi-search col-3"></i>
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
            <ClickOutHandler onClickOut={()=> toggleUserDropdown()}>
              <button className='bg-transparent' onClick={() => toggleUserDropdown()}>
                <div className='container d-inline-flex align-items-center px-0'>
                  <div className='col-6 p-1'>
                    {/* <i className="bi bi-person-circle"></i> */}
                    <img src={Avatar} className='default-avatar'/>
                  </div>
                  <div className='col-6 p-1'>
                    <i className="bi bi-chevron-down icon"></i>
                  </div>
                </div>
              </button>
            </ClickOutHandler>

          </span>
        </div>
      </header>
      <div>
        <div className={'drop-menu ' + userDropdownVisibilityClass }>
        <a href='' className='menu-links'> 
          <i className="bi bi-box-arrow-right icon"></i> 
          <div>
            Test
          </div>
          </a>
          <a href='' className='menu-links'> 
          <i className="bi bi-box-arrow-right icon"></i> 
          <div>
            Log In / Sign Up
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
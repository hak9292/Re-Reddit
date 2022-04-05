import React from 'react';

import Logo from '../assets/images/reddit-logo-icon.png';
import './Header.css';

function Header() {
  return (
    <div >
      <header className='d-flex '>
        <div className='rereddit-header d-inline-flex justify-content-between'>
         {/* logo */}
         <div>  
            <img src={Logo} alt="rereddit logo" className='rereddit-logo m-2'/>
          </div>
          {/* search box */}
          <div>
            <form className='rereddit-search text-danger flex-grow-1 w-auto'>
              <div>
                <i class="bi bi-search"></i>
                <input type="search" className='search-bar' placeholder='Search ReReddit' />
              </div>
            </form>
          </div>
          {/* user dropdown */}
          <div className='user-dropdown'>
            <button className='bg-transparent'>
              <i class="bi bi-person-circle"></i> <i class="bi bi-chevron-down"></i>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
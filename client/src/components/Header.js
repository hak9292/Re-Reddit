import React from 'react';

import Logo from '../assets/images/allinonelogo.png';
import './Header.css';
import Reddit from '../assets/images/words.svg'

function Header() {
  return (
    <div className="header">
      <img id="logo" src={Logo} alt="reddit logo"/>
    </div>
  );
}

export default Header;
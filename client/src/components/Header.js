import React, { useState, useContext } from 'react';
import ClickOutHandler from 'react-clickout-handler';
import Logo from '../assets/reddit-logo-icon.png';
import './Header.css';
import Button from './Button';
import AuthModal from './AuthModal';
import Avatar from '../assets/default-avatar.webp';
import AuthModalContext from './AuthModalContext';
import UserContext from './UserContext';
import 'font-awesome/css/font-awesome.min.css';
import {
  BellIcon,
  ChatIcon,
  PlusIcon,
  UserIcon
} from "@heroicons/react/outline";


function Header() {

  // show modal
  const [modalShow, setModalShow] = React.useState(false);
  const [userDropdownVisibilityClass, setUserDropdownVisibilityClass] = useState('d-none');
  const [modalType, setModalType] = useState('login');
  // const modalType = this.props.modalType

  function toggleUserDropdown() {
    if (userDropdownVisibilityClass === 'd-none') {
      setUserDropdownVisibilityClass('d-block')
    } else {
      setUserDropdownVisibilityClass('d-none')
    }
  }

  const authModal = useContext(AuthModalContext);
  const user = useContext(UserContext);

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

          {user.username && (
          <div className='d-md-inline-flex text-nowrap d-none'>
            <Button style={{backgroundColor: '#030303', borderColor: '#030303'}} >
              <ChatIcon className="icon-user" />
            </Button>
            <Button style={{backgroundColor: '#030303', borderColor: '#030303'}}>
              <BellIcon  className="icon-user"/>
            </Button>
            <Button style={{backgroundColor: '#030303', borderColor: '#030303'}}>
              <PlusIcon  className="icon-user"/>
            </Button>
          </div>   

        )}

        {!user.username && (
          /* Login/Signup Buttons */
            <div className='d-md-inline-flex text-nowrap d-none col-6 px-1'>
              {/* Connect with modal button on click, copied without onclick functionality */}
              <Button outline variant="primary" 
              onClick={() => {
                authModal.setShow('login');
                setModalShow(true);
                }}
                > 
                Log In 
              </Button>

              <Button onClick={() => {
                authModal.setShow('register');
                setModalShow(true);
              }}
              > 
              Sign Up 
              </Button>

            </div>      
        )}

        
        <AuthModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          setModalShow={setModalShow}
        />

          {/* user dropdown */}
          <span className='user-dropdown'>
            <ClickOutHandler onClickOut={()=> setUserDropdownVisibilityClass('d-none')}>
              <button className='bg-transparent' onClick={() => toggleUserDropdown()}>
                <div className='container d-inline-flex align-items-center px-0'>
                  <div className='col-6 p-1'>
                    {!user.username && (
                      <UserIcon className="icon-user" />
                      )}
                    {user.username && (
                      <img src={Avatar} className='default-avatar'/>
                    )}
                  </div>
                  <div className='col-6 p-1'>
                    <i className="bi bi-chevron-down icon"></i>
                  </div>
                </div>
              </button>
              <div>
                {/* Prompt this screen if logged out */}
                {!user.username && (
                  <div className={'drop-menu ' + userDropdownVisibilityClass }>
                    <button onClick={() => setModalShow(true)}>
                        <i className="bi bi-box-arrow-left icon py-2"></i> Log In / Sign Up
                    </button> 
                  </div>
                )}

                {user.username && (
                  <div className={'drop-menu ' + userDropdownVisibilityClass }>
                    <button onClick={() => user.logout()}>
                        <i className="bi bi-box-arrow-right icon py-2"></i> Log Out
                    </button> 
                  </div>
                )}

              </div>
            </ClickOutHandler>

          </span>
        </div>
      </header>

    </div>
  );
}

export default Header;
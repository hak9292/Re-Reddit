import React from 'react';
import AuthModal from './components/AuthModal';
import AuthModalContext from './components/AuthModalContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './components/UserContext';
import Routing from './components/Routing'
import config from './configs';
import PostFormModal from './components/PostFormModal';
import ModalFormat from './components/ModalFormat';

function App() {
  const [showAuthModal,setShowAuthModal] = useState(false);
  const [user,setUser] = useState({});

  useEffect(() => {


//     axios.get(' http://localhost:4000/user', { withCredentials: true })

    axios.get(`${config.SERVER_URI}/user`, {withCredentials:true})

      .then(response => setUser(response.data));
  }, []);

  function logout() {

//     axios.post('http://localhost:4000/logout', {}, { withCredentials: true })

    axios.post(`${config.SERVER_URI}/logout`, {}, {withCredentials:true})

      .then(() => setUser({}));
  }

  return (
    <AuthModalContext.Provider value={{ show: showAuthModal, setShow: setShowAuthModal }}>
      <UserContext.Provider value={{ ...user, logout, setUser }}>
        <Routing />
        <AuthModal />
        {/* <PostFormModal /> */}
        <ModalFormat />


        {/* <div className='post-area h-100'>
        <div className='post-container'>
          <div className=''>
            <div className='post-author'>
              <p> Posted by u/jasminegonecrazy 14 hours ago</p>
            </div>
            <h3 className='post-title'>
              What are Parrots trying to achieve by mimicking the sounds they hear?
            </h3>
            <div className='post-content'>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt molestie quam, at congue orci pulvinar vel. In odio justo, semper quis pulvinar dapibus, feugiat non nisl. Nullam efficitur risus eget gravida iaculis. Donec convallis pretium quam, tristique bibendum sapien luctus gravida. Integer condimentum vel enim sed euismod. Suspendisse semper nibh vitae sagittis commodo. Aliquam condimentum velit dapibus, posuere ex vel, aliquam lorem. Suspendisse aliquet tristique suscipit. Suspendisse potenti. Nam et malesuada nunc. Vestibulum placerat ut magna et euismod. Aenean cursus lacus libero, ac aliquet purus facilisis vel. Vestibulum id sem ex. Nullam fringilla quis neque cursus fermentum.
              Curabitur at tincidunt nulla. Nulla ut bibendum purus. Ut volutpat imperdiet vestibulum. Proin iaculis ornare turpis, eu vehicula metus aliquet ac. Proin et sagittis orci. Cras nec euismod felis, quis finibus mi. Phasellus a auctor nisi. Cras euismod dapibus semper.
              Praesent nisl ligula, hendrerit nec hendrerit vel, consequat hendrerit ex. Phasellus et tellus lobortis, rutrum nunc non, laoreet risus. Integer laoreet placerat enim id sagittis. Aliquam libero nulla, congue nec laoreet sed, accumsan vel nibh. Vivamus augue erat, cursus fringilla leo rutrum, scelerisque sagittis dui. Sed id metus non nisi dictum sodales a id diam. Nam elit quam, consequat eget dapibus in, accumsan a elit. Fusce vel elit sapien. Donec ligula erat, scelerisque non neque sit amet, rutrum rutrum ante. Vestibulum ac leo ex. Nulla at sagittis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla quis nulla maximus, vulputate felis quis, pellentesque ligula. Donec tempus porttitor elit. Donec volutpat facilisis leo id mollis. Vestibulum eget orci libero.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      </UserContext.Provider>
    </AuthModalContext.Provider>
  );
}

export default App;

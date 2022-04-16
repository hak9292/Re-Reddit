import React from 'react';
import AuthModal from './components/AuthModal';
import AuthModalContext from './components/AuthModalContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './components/UserContext';
import Routing from './components/Routing'
import config from './configs';
import PostFormModal from './components/PostFormModal';
// import ModalFormat from './components/PostFormModal';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {


    //     axios.get(' http://localhost:4000/user', { withCredentials: true })

    axios.get(`${config.SERVER_URI}/user`, { withCredentials: true })

      .then(response => setUser(response.data));
  }, []);

  function logout() {

    //     axios.post('http://localhost:4000/logout', {}, { withCredentials: true })

    axios.post(`${config.SERVER_URI}/logout`, {}, { withCredentials: true })

      .then(() => setUser({}));
  }

  return (
    <AuthModalContext.Provider value={{ show: showAuthModal, setShow: setShowAuthModal }}>
      <UserContext.Provider value={{ ...user, logout, setUser }}>
        <Routing />
        <AuthModal />
        <PostFormModal />
      </UserContext.Provider>
    </AuthModalContext.Provider>
  );
}

export default App;

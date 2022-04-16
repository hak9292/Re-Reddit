import React from 'react';
import AuthModal from './components/AuthModal';
import AuthModalContext from './components/AuthModalContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './components/UserContext';
import RouterShell from './components/RouterShell'
import config from './configs';
import CreatePostModal from './components/CreatePostModal';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`${config.SERVER_URI}/user`, { withCredentials: true })
      .then(response => setUser(response.data));
  }, []);

  function logout() {
    axios.post(`${config.SERVER_URI}/logout`, {}, { withCredentials: true })
      .then(() => setUser({}));
  }

  return (
    <AuthModalContext.Provider value={{ show: showAuthModal, setShow: setShowAuthModal }}>
      <UserContext.Provider value={{ ...user, logout, setUser }}>
        <RouterShell />
        <AuthModal />
        <CreatePostModal />
      </UserContext.Provider>
    </AuthModalContext.Provider>
  );
}

export default App;

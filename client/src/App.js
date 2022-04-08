import React from 'react';
import Header from './components/Header';
import AuthModal from './components/AuthModal';
import AuthModalContext from './components/AuthModalContext';
import {useState} from 'react';

function App() {
  const [showAuthModal,setShowAuthModal] = useState(false);
  return (
    <AuthModalContext.Provider value={{show:showAuthModal, setShow:setShowAuthModal}}>
      <Header />
      <AuthModal />
    </AuthModalContext.Provider>
  );
}

export default App;

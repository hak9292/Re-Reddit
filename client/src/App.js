import React from 'react';
import Header from './components/Header';
import AuthModal from './components/AuthModal';

function App() {
  return (
    <div>
      <Header />
      <AuthModal show={false}/>
    </div>
  );
}

export default App;

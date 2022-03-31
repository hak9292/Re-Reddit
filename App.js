import React from 'react';
import Header from './client/src/components/Header';
import Nav from './client/src/components/Nav';

// Import our list of users from users.js
import songs from './songs';

// Pass users array to the List component as a prop
export default function App() {
  return (
    <div>
      <Nav />
      <Game />
    </div>
  );
}

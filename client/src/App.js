import React from 'react';
import Header from './components/Header';
import Subred from './components/Subred';
import Nav from './components/Nav';
import Post from './components/Post'
import axios from 'axios';
import { useState, useEffect } from "react";


export default function App() {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get('/user', {
      withCredentials: true
    })
      .then(response => setUser(response.data));
    axios.get('/comments', {
      withCredentials: true})
      .then(response => setComments(response.data));

  }, []);
  return (
    <div>
      <Header />
      <div>
        {comments.map(comment => (
          <Post {...comment}/>
        ))}
      </div>
      <Subred />
    </div>
  );
}
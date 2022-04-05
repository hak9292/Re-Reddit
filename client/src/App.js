import React from 'react';
import Header from './components/Header';
import Subred from './components/Subred';
import Nav from './components/Nav';
import Post from './components/Post'
import axios from 'axios';
import { useState, useEffect } from "react";


export default function App() {
  useEffect(() => {
    axios.get('localhost:8080/user', {
      withCredentials: true
    })
      .then(response => SpeechSynthesisUtterance(response.data));
  }, []);
  return (
    <div>
      <Header />
      <Post />
      <Subred />
    </div>
  );
}
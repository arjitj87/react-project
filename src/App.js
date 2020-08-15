import React from 'react';
import profileImage from './image/image1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Anushka's Blog</h1>
      <h6>This will be awesome.. Yayy</h6>
      <img src={profileImage} alt="profile" />
    </div>
  );
}

export default App;

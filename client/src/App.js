import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchPlayers from './components/FetchPlayers';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FetchPlayers />
    </div>
  );
}

export default App;

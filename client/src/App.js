import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchPlayers from './components/FetchPlayers';
import useDarkMode from "./hooks/UseDarkmode.js";


function App() {
  const [toggleDarkMode, applyCSS, saveSetting] = useDarkMode();

  const handleDarkMode = () => {
    toggleDarkMode();
    applyCSS();
    //saveSetting();
  };
  return (
    <div className="App">
     
      <button onClick={handleDarkMode}>Dark Mode On/Off</button>
      <FetchPlayers />
    </div>
  );
}

export default App;
import { useState } from "react";


const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState();
  //console.log(darkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const applyCSS = () => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  };

  const saveSetting = () => {
    localStorage.setItem("darkMode", darkMode);
  };

  return [toggleDarkMode, applyCSS, saveSetting, setDarkMode];
};

export default useDarkMode;
import { useEffect } from "react";
import { useLocalStorage } from "./Localstoragehook";

export const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage("darkMode");

    useEffect (() => {
        let body = document.querySelector("body");
        storedValue
        ? body.classList.add("dark-mode")
        : body.classList.remove("dark-mode");
    }, [storedValue]);

    return [storedValue, setValue];
};
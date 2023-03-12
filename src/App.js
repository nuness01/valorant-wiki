import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { createContext } from "react";
import { createGlobalStyle } from "styled-components";
import ReactSwitch from "react-switch";
import Header from "./components/Header/Header.jsx";
import "./App.css";

export const ThemeContext = createContext(null);

const App = () => {
  const lightTheme = {
    background: "#ffffff",
    text: "#000000",
  };

  const darkTheme = {
    background: "#1d1d1d",
  };

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  } 
  .div{
  background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }`;

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <GlobalStyle theme={theme} />
      <Header />
      <div className="button">
        <ReactSwitch
          onChange={handleToggleTheme}
          checked={theme === darkTheme}
        />
      </div>
      <Outlet />
    </div>
  );
};
export default App;

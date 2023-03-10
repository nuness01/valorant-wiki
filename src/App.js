import React, { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import "./styles/App.css";
import Header from "./components/Header/Header.jsx";

import { createContext } from "react";
import styled, { createGlobalStyle } from "styled-components";

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
`;

  const AppContainer = styled.div`
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  `;

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
      <Header />
      <GlobalStyle theme={theme} />
      <AppContainer className="button" theme={theme}>
        <button className="ui button" onClick={handleToggleTheme}>
          Theme Change
        </button>
      </AppContainer>
      <Outlet />
    </div>
  );
};
export default App;

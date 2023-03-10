import React from "react";
import axios from "axios";
import { useState } from "react";

const AppLevelContext = React.createContext();
const API = "https://valorant-api.com/v1";

export const AppLevelProvider = ({ children }) => {
  const [agents, setAgents] = useState([]);
  const [maps, setMaps] = useState([]);
  const [weapons, Setweapons] = useState([]);

  const fetchAgents = async () => {
    const response = await axios.get(`${API}/agents?isPlayableCharacter=true`);
    setAgents(response.data.data);
  };

  const fetchMaps = async () => {
    const response = await axios.get(`${API}/maps`);
    setMaps(response.data.data);
  };

  const fetchWeapons = async () => {
    const response = await axios.get(`${API}/weapons`);
    Setweapons(response.data.data);
  };
  return (
    <AppLevelContext.Provider
      value={{
        agents,
        maps,
        weapons,
        fetchAgents,
        fetchMaps,
        fetchWeapons,
        setMaps,
        Setweapons,
        setAgents,
      }}
    >
      {children}
    </AppLevelContext.Provider>
  );
};

export default AppLevelContext;

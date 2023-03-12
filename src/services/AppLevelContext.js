import React from "react";
import axios from "axios";
import { useState } from "react";

const AppLevelContext = React.createContext();
const API = "https://valorant-api.com/v1";

export const AppLevelProvider = ({ children }) => {
  const [agents, setAgents] = useState([]);
  const [maps, setMaps] = useState([]);
  const [weapons, Setweapons] = useState([]);

  const getAgents = async () => {
    const response = await axios.get(`${API}/agents?isPlayableCharacter=true`);
    setAgents(response.data.data);
  };

  const getMaps = async () => {
    const response = await axios.get(`${API}/maps`);
    setMaps(response.data.data);
  };

  const getWeapons = async () => {
    const response = await axios.get(`${API}/weapons`);
    Setweapons(response.data.data);
  };
  return (
    <AppLevelContext.Provider
      value={{
        agents,
        maps,
        weapons,
        getAgents,
        getMaps,
        getWeapons,
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

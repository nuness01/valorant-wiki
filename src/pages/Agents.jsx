import React from "react";
import { useContext, useEffect } from "react";

import AgentList from "../components/Agents/AgentList";
import AppLevelContect from "../services/AppLevelContext";

const Agents = () => {
  const { getAgents } = useContext(AppLevelContect);

  useEffect(() => {
    getAgents();
  }, [getAgents]);

  return (
    <>
      <AgentList />
    </>
  );
};

export default Agents;

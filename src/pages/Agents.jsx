import React from "react";
import { useContext, useEffect } from "react";

import AgentList from "../components/Agents/AgentList";
import AppLevelContext from "../services/AppLevelContext";

const Agents = () => {
  const { getAgents } = useContext(AppLevelContext);

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

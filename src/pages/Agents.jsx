import React from "react";
import { useContext, useEffect } from "react";
import AgentList from "../components/Agents/AgentList";
import AppLevelContect from "../context/AppLevelContext";

const Agents = () => {
  const { fetchAgents } = useContext(AppLevelContect);

  useEffect(() => {
    fetchAgents();
  }, [fetchAgents]);

  return (
    <>
      <AgentList />
    </>
  );
};

export default Agents;

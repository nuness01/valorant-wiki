import React from "react";
import styles from "../../styles/AgentList.module.css";
import { useContext } from "react";

import AppLevelContext from "../../services/AppLevelContext";
import AgentItem from "./AgentItem";

const AgentList = () => {
  const { agents } = useContext(AppLevelContext);
  return (
    <div className={styles.agentList}>
      {agents.map((agent, id) => (
        <AgentItem agent={agent} key={id} />
      ))}
    </div>
  );
};

export default AgentList;

import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Agent.module.css";

const AgentItem = ({ agent }) => {
  return (
    <div className={styles.agentCard}>
      <div className={styles.agentHeading}>
        <h3>{agent.displayName}</h3>
        <p>{agent.description}</p>
      </div>
      <img src={agent.displayIcon} alt="" />
      <div className={styles.agentInfo}>
        <p className={styles.agentRole}>{agent.role.displayName}</p>
        <button className={styles.button}>
          <Link to={`${agent.uuid}`}>
            Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AgentItem;

import styles from "../styles/SingleAgent.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import AgentAbilities from "../components/Agents/AgentAbilities";

const SingleAgent = () => {
  const { agentUuid } = useParams();
  const [agentDetails, setAgentDetails] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://valorant-api.com/v1/agents/${agentUuid}`
      );
      const data = await res.json();
      console.log(data.data);
      setAgentDetails(data.data);
    };
    fetchData();
  }, [agentUuid]);
  return (
    <div className={styles.container}>
      <div className={styles.agentCard}>
        {agentDetails && <AgentAbilities abilities={agentDetails.abilities} />}
      </div>
    </div>
  );
};

export default SingleAgent;

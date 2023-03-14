import { useState } from "react";
import styles from "../../styles/AgentAbilities.module.css";

const AgentAbilities = (props) => {
  const [activeAbility, setActiveAbility] = useState(0);
  const [toggle, setToggle] = useState(true);
  return (
    <div className={styles["abilities-container"]}>
      <div className={styles.title}>
        <h1>Abilities</h1>
        <div></div>
      </div>
      <div className={styles.abilities}>
        {props.abilities.map((ability, index) => {
          if (ability.displayIcon) {
            return (
              <div
                key={ability.displayName}
                onClick={() => {
                  setActiveAbility(index);
                  setToggle(false);
                  setTimeout(() => {
                    setToggle(true);
                  }, 100);
                }}
                className={`icon ${activeAbility === index && styles.active}`}
              >
                <img src={ability.displayIcon} alt="" />
              </div>
            );
          }
          return <></>;
        })}
      </div>

      <div className={styles["description-container"]}>
        {toggle && (
          <>
            <h1 className={`${toggle && styles.zoom}`}>
              {props.abilities[activeAbility].displayName}
            </h1>
            <p className={`${toggle && styles.zoom}`}>
              {props.abilities[activeAbility].description}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AgentAbilities;

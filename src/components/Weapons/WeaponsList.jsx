import React from "react";
import { useContext } from "react";
import styles from "../../styles/WeaponsList.module.css";

import AppLevelContext from "../../services/AppLevelContext";
import WeaponItem from "./WeaponItem";

const WeaponList = () => {
  const { weapons } = useContext(AppLevelContext);
  return (
    <div className={styles.weaponList}>
      {weapons.map((weapon, id) => (
        <WeaponItem weapon={weapon} key={id} />
      ))}
    </div>
  );
};

export default WeaponList;

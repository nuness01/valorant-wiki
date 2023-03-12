import React from "react";
import styles from "../../styles/MapsList.module.css";
import { useContext } from "react";

import AppLevelContext from "../../services/AppLevelContext";
import MapsItem from "./MapsItem";

const MapList = () => {
  const { maps } = useContext(AppLevelContext);
  return (
    <div className={styles.mapList}>
      {maps.map((map, id) => (
        <MapsItem map={map} key={id} />
      ))}
    </div>
  );
};

export default MapList;

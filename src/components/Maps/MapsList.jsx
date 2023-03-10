import React from "react";
import { useContext } from "react";
import AppLevelContext from "../../services/AppLevelContext";
import MapsItem from "./MapsItem";
import styles from "../../styles/MapsList.module.css";

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

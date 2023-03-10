import React from "react";

import styles from "../../styles/Maps.module.css";

const MapsItem = ({ map }) => {
  return (
    <div
      key={map.uuid}
      className={styles.map}
      style={{ backgroundImage: `url(${map.splash})` }}
    >
      <h1>{map.coordinates}</h1>
      <h1>{map.displayName}</h1>
    </div>
  );
};

export default MapsItem;

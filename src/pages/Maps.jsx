import React from "react";
import { useContext, useEffect } from "react";

import MapList from "../components/Maps/MapsList";
import AppLevelContect from "../services/AppLevelContext";

const Maps = () => {
  const { getMaps } = useContext(AppLevelContect);

  useEffect(() => {
    getMaps();
  }, [getMaps]);

  return (
    <>
      <MapList />
    </>
  );
};

export default Maps;

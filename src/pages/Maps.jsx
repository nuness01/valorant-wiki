import React from "react";
import { useContext, useEffect } from "react";

import MapList from "../components/Maps/MapsList";
import AppLevelContect from "../services/AppLevelContext";

const Maps = () => {
  const { fetchMaps } = useContext(AppLevelContect);

  useEffect(() => {
    fetchMaps();
  }, [fetchMaps]);

  return (
    <>
      <MapList />
    </>
  );
};

export default Maps;

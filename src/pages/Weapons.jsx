import React from "react";
import { useContext, useEffect } from "react";

import WeaponsList from "../components/Weapons/WeaponsList";
import AppLevelContext from "../services/AppLevelContext";

const Weapons = () => {
  const { getWeapons } = useContext(AppLevelContext);

  useEffect(() => {
    getWeapons();
  }, [getWeapons]);
  return (
    <>
      <WeaponsList />
    </>
  );
};

export default Weapons;

import React from "react";
import { useContext, useEffect } from "react";
import WeaponsList from "../components/Weapons/WeaponsList";
import AppLevelContext from "../services/AppLevelContext";

const Weapons = () => {
  const { fetchWeapons } = useContext(AppLevelContext);

  useEffect(() => {
    fetchWeapons();
  }, [fetchWeapons]);
  return (
    <>
      <WeaponsList />
    </>
  );
};

export default Weapons;

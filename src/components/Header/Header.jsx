import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  const location = useLocation();

  const navList = [
    {
      name: "Weapons",
      path: "/weapons",
    },
    {
      name: "Agents",
      path: "/agents",
    },
    {
      name: "Maps",
      path: "/maps",
    },
  ];

  return (
    <header>
      <div className={styles.brand}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <div className={styles.navList}>
          {navList.map((item) => (
            <Link key={item.name} to={item.path}>
              <div className={styles.navLink} active={location.toString()}>
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

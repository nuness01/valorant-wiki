import styles from "../../styles/Weapons.module.css";

const WeaponItem = ({ weapon }) => {
  return (
    <div className={styles.WeaponsList}>
      <div className={styles.weapons}>
        <div className={styles["weapon-card"]} key={weapon.uuid}>
          <div className={styles["card-details"]}>
            <h4>{weapon.displayName}</h4>
            <img src={weapon.displayIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponItem;

import { Avatar } from "@chakra-ui/react";
import styles from "./styles.module.scss";

export function Welcome() {
  return (
    <div className={styles.userData}>
      <div className={styles.headerUserData}>
        <div className={styles.user}>
          <h1>
            Olá,
            <br />
            Thomas!
          </h1>
        </div>
        <div className={styles.intradayData}>
          <div className={styles.currentIntraday}>
            <p className={styles.intradayHours}>16:40:60</p>
            <p className={styles.day}>21/07/2022</p>
            <span>
              <span className="material-symbols-outlined">clear_day</span>
              <p>37°C</p>
            </span>
          </div>
          <div className={styles.currentSubject}>
            <p className={styles.subject}>GEOGRAFIA</p>
            <p className={styles.themeSubject}>Brioquitas e piterossauros</p>
          </div>
        </div>
      </div>
    </div>
  );
}

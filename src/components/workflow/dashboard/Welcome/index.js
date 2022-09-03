import { Avatar } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export function Welcome() {
  const [o, setO] = useState(
    new Date().toLocaleTimeString("pt-BR", { timeZone: "America/Belem" })
  );
  useEffect(() => {
    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
      var d = new Date(),
        displayDate;
      if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
        displayDate = d.toLocaleTimeString("pt-BR");
      } else {
        displayDate = d.toLocaleTimeString("pt-BR", {
          timeZone: "America/Belem",
        });
      }
      setO(displayDate);
      console.log(o);
    }
  });

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
            <p className={styles.intradayHours}>{o}</p>
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

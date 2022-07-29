import styles from "./styles.module.scss";

export function UserData() {
  return (
    <div className={styles.userData}>
      <div className={styles.headerUserData}>
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
      <div className={styles.mainUserData}>
        <div className={styles.classroomAmountUserData}></div>
        <div className={styles.absence}>
          <h1>FALTAS</h1>
          <p>238</p>
        </div>
        <div className={styles.attendancePercentage}>
          <h1>PRESENÇA</h1>
          <p>23%</p>
        </div>
        <div className={styles.classroomAmount}>
          <h1>AULAS</h1>
          <p>2324</p>
        </div>
      </div>
    </div>
  );
}

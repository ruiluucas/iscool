import styles from "./styles.module.scss";

export function PostRoll() {
  return (
    <div className={styles.postRoll}>
      <div className={styles.post}>
        <div className={styles.headerPost}>
          <h1>Edutech - Concurso de programação gdsfbzdbxgdzfg</h1>
          <div>
            <h4>TAREFA</h4>
            <h3>Criado em 21 de Julho de 2022</h3>
          </div>
        </div>
        <div className={styles.mainPost}></div>
        <div className={styles.footerPost}>
          <h1>GEOGRAFIA</h1>
          <div className={styles.commentBox}>
            <span className="material-symbols-outlined">mode_comment</span>
            <p>3</p>
          </div>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.headerPost}>
          <h1>Tarefa</h1>
          <div>
            <h4>TAREFA</h4>
            <h3>Criado em 21 de Julho de 2022</h3>
          </div>
        </div>
        <div className={styles.mainPost}></div>
        <div className={styles.footerPost}>
          <h1>GEOGRAFIA</h1>
          <div className={styles.commentBox}>
            <span className="material-symbols-outlined">mode_comment</span>
            <p>3</p>
          </div>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.headerPost}>
          <h1>Tarefa</h1>
          <div>
            <h4>TAREFA</h4>
            <h3>Criado em 21 de Julho de 2022</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

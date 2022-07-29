import styles from "./styles.module.scss";

export function PostRoll() {
  const posts = [1, 2, 3, 4, 5];

  return (
    <div className={styles.postRoll}>
      {posts.map(() => (
        <div className={styles.post}>
          <div className={styles.headerPost}>
            <h1>Edutech - Concurso de pogrramação gdsfbzdbxgdzfg</h1>

            <div>
              <h4>TAREFA</h4>
              <h3>Criado em 21 de Julho de 2022</h3>
            </div>
          </div>

          <div className={styles.mainPost}>
            <img src="https://fluxoconsultoria.poli.ufrj.br/wp-content/uploads/2016/05/photo-1529101091764-c3526daf38fe.jpg" />
          </div>

          <div className={styles.footerPost}>
            <div className={styles.subjectAndChecked}>
              <h1>GEOGRAFIA</h1>
              <span class="material-symbols-outlined">done</span>
            </div>

            <div className={styles.commentBox}>
              <span className="material-symbols-outlined">mode_comment</span>
              <p>3</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

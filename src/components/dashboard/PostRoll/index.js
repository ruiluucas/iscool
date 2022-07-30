import { Avatar } from "@chakra-ui/react";
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
            <div className={styles.postDataPreview}>
              <div className={styles.user}>
                <Avatar
                  className={styles.avatar}
                  size="xl"
                  name="Dan Abrahmov"
                  src="https://styles.redditmedia.com/t5_2e54fb/styles/communityIcon_ejmiflbrrua71.png"
                />
                <div className={styles.userInformation}>
                  <p>PROFESSOR</p>
                  <h1>Cleitin da Silva</h1>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                erat dui, venenatis id lacus at, pulvinar tristique sem. Aliquam
                vestibulum orci quis hendrerit facilisis. Fusce maximus iaculis
                odio et aliquam. Vestibulum pharetra mauris sit amet tincidunt
                ultricies. Sed lobortis, ex in finibus posuere, neque nibh
                lacinia urna, sit amet faucibus enim orci eget elit. Quisque
                dictum mauris accumsan lacus luctus, vel accumsan purus
                ultrices. Pellentesque tincidunt dui ex. Suspendisse imperdiet,
                dui ut sodales interdum, ante dui ornare nisl, nec sollicitudin
                felis mauris ut lacus. Donec sit amet rhoncus ligula. Vestibulum
                vel erat pellentesque, dapibus lorem sit amet, tempor odio.
                Quisque vel justo dui. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Donec
                dapibus vitae nisl finibus mattis. In hac habitasse platea
                dictumst. Sed faucibus at lorem vitae tincidunt. Nam porttitor
                tortor et ultricies aliquam.
              </p>
            </div>
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

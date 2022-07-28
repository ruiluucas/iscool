import Head from "next/head";
import styles from "../styles/Dashboard.module.scss";
import {
  Avatar,
  Input,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Head>
        <title>Iscool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.root} id="root">
        <div className={styles.header}>
          <div className={styles.logo}>
            <a className={styles.logoAnchor}>
              <span className="material-symbols-outlined">add_circle</span>
            </a>
          </div>
          <div className={styles.search}>
            <div className={styles.searchArea}>
              <span className="material-symbols-outlined" id="search-icon">
                search
              </span>
              <Input placeholder="Pesquisar..." />
            </div>
          </div>
          <div className={styles.headerMenu}>
            <div>
              <a>
                <span className="material-symbols-outlined">add_circle</span>
              </a>
              <a>
                <span className="material-symbols-outlined">add_circle</span>
              </a>
              <a>
                <span className="material-symbols-outlined">add_circle</span>
              </a>
              <a>
                <span className="material-symbols-outlined">add_circle</span>
              </a>
              <a ref={btnRef} onClick={onOpen}>
                <Avatar
                  size="sm"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              </a>
            </div>
          </div>
          <div className={styles.headerMenuMobile}>
            <a className={styles.headerMenuMobileAnchor}>
              <span className="material-symbols-outlined">menu</span>
            </a>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.leftMenu}>
            <a>
              <span className="material-symbols-outlined">add_circle</span>
            </a>
            <a>
              <span className="material-symbols-outlined">add_circle</span>
            </a>
            <a>
              <span className="material-symbols-outlined">add_circle</span>
            </a>
            <a>
              <span className="material-symbols-outlined">add_circle</span>
            </a>
            <a>
              <span className="material-symbols-outlined">add_circle</span>
            </a>
            <a>
              <span className="material-symbols-outlined">add_circle</span>
            </a>
            <a>
              <span className="material-symbols-outlined">add_circle</span>
            </a>
            <a>
              <span className="material-symbols-outlined">add_circle</span>
            </a>
          </div>
          <div className={styles.postRoll}>
            <div className={styles.post}>
              <div className={styles.headerPost}>
                <h1>Edutech - Concurso de programação gdsfbzdbxgdzfg</h1>
                <div>
                  <h4>TAREFA</h4>
                  <h3>Criado em 21 de Julho de 2022</h3>
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
                <span className="material-symbols-outlined">mode_comment</span>
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
          <div className={styles.userData}>
            <div>
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
                  <p className={styles.themeSubject}>
                    Brioquitas e piterossauros
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#12003d"}>
          <DrawerHeader className={styles.drawerHeader}>
            <h1>CONTA</h1>
          </DrawerHeader>
          <DrawerBody>
            <div className={styles.user}>
              <Avatar
                className={styles.avatar}
                size="xl"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
              <div className={styles.userInformation}>
                <p>ESTUDANTE</p>
                <h1>Tobas Shelby</h1>
                <h2>2° Ano - B</h2>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

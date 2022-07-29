import { useRef } from "react";

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

import styles from "./styles.module.scss";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
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

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
        <div className={styles.headerMenuMobile}>
          <a className={styles.headerMenuMobileAnchor}>
            <span className="material-symbols-outlined">menu</span>
          </a>
        </div>
      </div>
    </>
  );
}

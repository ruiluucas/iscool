import { useRef } from "react";

import {
  Avatar,
  Input,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerFooter,
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
            <span className="material-symbols-outlined">school</span>
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
          <a
            className={styles.headerMenuMobileAnchor}
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
          >
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
        <DrawerContent flexGrow="1" overflow="clip" zIndex="5" position="fixed">
          <DrawerBody
            bg="#000051"
            height="150vh"
            bgGradient="linear(
    310deg,
    #0277bd 0%,
    #000051 100%
  )"
          >
            <div className={styles.drawerList}>
              <a bg="transparent" fontWeight="900" className={styles.user}>
                <span>
                  <Avatar
                    className={styles.avatar}
                    size="xl"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </span>{" "}
                Thomas Shelby
              </a>
              <a bg="transparent" fontWeight="900">
                <span className="material-symbols-outlined">chat</span>{" "}
                Mensagens
              </a>
              <a bg="transparent" fontWeight="900">
                <span className="material-symbols-outlined">library_books</span>{" "}
                Pendentes
              </a>
              <a bg="transparent" fontWeight="900">
                <span className="material-symbols-outlined">book</span> Estudos
              </a>
              <a bg="transparent" fontWeight="900">
                <span className="material-symbols-outlined">insights</span>{" "}
                Estatísticas
              </a>
              <a bg="transparent" fontWeight="900">
                <span className="material-symbols-outlined">help</span> Suporte
              </a>
              <a bg="transparent" fontWeight="900">
                <span className="material-symbols-outlined">settings</span>{" "}
                Configurações
              </a>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

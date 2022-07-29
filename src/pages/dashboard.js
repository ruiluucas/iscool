import Head from "next/head";
import styles from "../styles/Dashboard.module.scss";
import { Header } from "../components/dashboard/Header";
import { LeftMenu } from "../components/dashboard/LeftMenu";
import { PostRoll } from "../components/dashboard/PostRoll";
import { UserData } from "../components/dashboard/UserData";

export default function DrawerExample() {
  return (
    <>
      <Head>
        <title>Iscool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.root} id="root">
        <Header />
        <div className={styles.main}>
          <LeftMenu />
          <PostRoll />
          <UserData />
        </div>
      </div>
    </>
  );
}

import Head from "next/head";
import styles from "../../styles/Dashboard.module.scss";
import { Header } from "../../components/workflow/Header";
import { LeftMenu } from "../../components/workflow/dashboard/LeftMenu";
import { PostRoll } from "../../components/workflow/PostRoll";
import { UserData } from "../../components/workflow/dashboard/UserData";
import { Welcome } from "../../components/workflow/dashboard/Welcome";

export default function DrawerExample() {
  return (
    <>
      <Head>
        <title>Iscool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.root} id="root">
        <Header />
        <Welcome />
        <PostRoll />
      </div>
    </>
  );
}

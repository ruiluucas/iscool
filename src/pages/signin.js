import Head from 'next/head'
import styles from "../styles/SignIn.module.scss"

export default function Teacher() {
    return (
        <>
            <Head>
                <title>Registrar</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <header>
                    <h2>Iscool</h2>
                </header>
            </div>
        </>
    )
}
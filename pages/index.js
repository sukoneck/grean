import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>grean</title>
        <meta name="description" content="an 🦙🍜™ project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Grean
        </h1>

        <p className={styles.description}>
          💣 stanky 🌿 project
          <br /><br />
          humbly presented to you by 🦙🍜™ (very cool and classy)
        </p>

        <div>
          <span className={styles.logo}>
              <Image src="/images/profile.jpg" alt="grean" width={111} height={111} />
          </span>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="grean.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by 🦙🍜™
        </a>
      </footer>
    </div>
  )
}

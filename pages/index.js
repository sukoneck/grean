import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>grean</title>
        <meta name="description" content="an 🦙🍜™ project" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>"></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Grean
        </h1>

        <p className={styles.description}>
          💣 stanky 🌿 project
          <br />
          humbly presented to you by a 🎓 PhD 
        </p>

        <p className={styles.pics}>
          <Image 
            src="/images/pipe.gif" 
            alt="grean" 
            // width={624} 
            // height={332} 
            width={489} 
            height={489} 
          />
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          // target="_blank"
        >
          🦙🍜™
        </a>
      </footer>
    </div>
  )
}

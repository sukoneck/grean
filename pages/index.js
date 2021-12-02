import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import 'victormono'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>grean</title>
        <meta name="description" content="an 🦙🍜™ project" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>"></link>
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          <i>grean</i>
        </h1>

        <p className={styles.pics}>
          <Image 
            src="/images/pipe.gif" 
            alt="grean" 
            width={489} 
            height={489} 
          />
        </p>

        <br /> <br /> <br /> 

        <p className={styles.descriptionbox}>
          under 🚧 construction
        </p>

        <br /> <br /> <br /> 
        
      </main>

      <footer className={styles.footer}>
          <Link href="/">
            <a>🦙🍜™</a>
          </Link>
      </footer>
    </div>
  )
}

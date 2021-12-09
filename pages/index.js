import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

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
          <Link href="/testing2">
            <a>🦙🍜™</a>
          </Link>
      </footer>
    </div>
  )
}

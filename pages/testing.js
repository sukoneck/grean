import { connectWallet, walletAddress, CONNECTEDWALLET, PROVIDERWALLET, wallo, WALLET, signer, wawa } from '../components/web3'
// import WALLET from '../components/web3'
// import { ethers } from 'ethers'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function web3() {
  return (
    <div className={styles.container}>
      <Head>
        <title>grean</title>
        <meta name="description" content="an 🦙🍜™ project" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>"></link>
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          <i>grean3</i>
        </h1>

        <p className={styles.descriptionbox}>
          connect 🤝 wallet
        </p>

        {/* <p className={styles.descriptionbox} onClick={walletAddress().then(r => r.toString)}> */}

        <button onClick={wallo}>
          wallo
        </button>

        <button onClick={wawa}>
          wawa
        </button>

        <button onClick={connectWallet}>
          connectWallet
        </button>

        <button onClick={walletAddress}>
          walletAddress = {WALLET}
        </button>

        <div>
          wallet = {WALLET} {signer} {CONNECTEDWALLET} {PROVIDERWALLET}
        </div>

        {/* <button onClick="changeTitle();">update wallet</button> */}

        {/* <p id="pTest">wallet not connected</p> */}
        

      {/* <p>{getSigner}</p>  */}

    </main><footer className={styles.footer}>
        <Link href="/">
          <a>🦙🍜™</a>
        </Link>
      </footer>
    </div>
  )
}

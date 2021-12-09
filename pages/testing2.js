import { connectWallet, walletAddress, CONNECTEDWALLET, PROVIDERWALLET, wallo, WALLET, signer, wawa, ADDY } from '../components/web3'
// import WALLET from '../components/web3'
// import { ethers } from 'ethers'
// import { web } from '../components/web3modal'
// import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
// import HTMLHead from "../components/HTMLHead";


export default function testing2() {
  return (
    <div className={styles.container}>
      {/* <HTMLHead /> */}

      <main className={styles.main}>

        <h1 className={styles.title}>
          <i>grean3</i>
        </h1>

        <p className={styles.descriptionbox}>
          connect 🤝 wallet
        </p>

        {/* <p className={styles.descriptionbox} onClick={walletAddress().then(r => r.toString)}> */}

        {/* <button onClick={web}>
          web
        </button> */}
       
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

        {/* <ADDY></ADDY>   */}

        <connectWallet />

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

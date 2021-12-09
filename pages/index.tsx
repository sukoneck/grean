import { useWeb3React } from "@web3-react/core";
// import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
// import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import styles from '../styles/Home.module.css'

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div className="container"> 

      <header className="nav">
          <Link href="/">
            <a>this is the nav bar</a>
          </Link>
      </header>

      <main>
        
        <h1 className="title">
          <i>grean</i>
        </h1>

        <section className="pics">
          <Image 
            src="/pipe.gif" 
            alt="grean" 
            width={489} 
            height={489} 
          />
        </section>

        <section className="descriptionbox">
          under 🚧 construction
        </section>

      </main>

      <footer>
        <Link href="/test">
          <a>🦙🍜™</a>
        </Link>
      </footer>

    </div>
  );
}

export default Home;

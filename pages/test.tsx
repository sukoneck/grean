import { useWeb3React } from "@web3-react/core";
// import Link from "next/link";
import Image from 'next/image'
// import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Test() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div className="container"> 

      <Header triedToEagerConnect={triedToEagerConnect} />

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

        <section className="paddington">
          {isConnected && (
            <section className="descriptionbox">
              <ETHBalance />

              <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" />
            </section>
          )}
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Test;

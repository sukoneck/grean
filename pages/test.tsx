import { useWeb3React } from "@web3-react/core";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import BongGif from "../components/BongGif";
import AccountName from "../components/AccountName";

const XMON_TOKEN_ADDRESS = "0x3aaDA3e213aBf8529606924d8D1c55CbDc70Bf74";

function Test() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;


  return (
    <section className="container">

      <Header triedToEagerConnect={triedToEagerConnect} />

      <Title />

      <main>

        {!isConnected && (
          <section className="descriptionbox">
            connect your wallet <b>↗</b> button 
          </section>
        )}

        {isConnected && (
          <section className="descriptionbox">
            <b>wow such info</b> <br />
          
            <AccountName />

            <ETHBalance />

            <TokenBalance tokenAddress={XMON_TOKEN_ADDRESS} symbol="XMON" />

          </section>
        )}

        <BongGif />

      </main>

      <Footer />

    </section>
  );
}

export default Test;

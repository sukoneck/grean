import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

async function web() {
  // https://github.com/Web3Modal/web3modal/blob/master/docs/providers/walletconnect.md
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "fdf2a581f7d945feaac1377227dd5c61" // required
      }
    }
  };
  
  // https://github.com/web3modal/web3modal
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    theme: "dark",
    providerOptions // required
  });
  
  const provider = await web3Modal.connect();
  const web = new Web3(provider);
  return web
};

export default web();
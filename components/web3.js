import { ethers } from 'ethers'

// const ETHBalance = () => {
//   const { account } = useWeb3React<Web3Provider>();
//   const { data } = useETHBalance(account);

//   return <p>Balance: Ξ{parseBalance(data ?? 0)}</p>;
// };

// export default ETHBalance;


export async function connectWallet() {
  // https://docs.metamask.io/guide/ethereum-provider.html#ethereum-isconnected
  if (ethereum.selectedAddress !== null) {
    // https://docs.metamask.io/guide/ethereum-provider.html#chain-ids
    console.log("metamask: " + ethereum.isMetaMask + ", network: " + ethereum.networkVersion + ", address: " + ethereum.selectedAddress );
  } else {
    try {
      // https://stackoverflow.com/a/69151962/13240009
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      // Prompt user for account connections
      await provider.send("eth_requestAccounts", []);
      // tell the browser how it is
      console.log("Now connected to network: " + (await provider.getNetwork()).chainId + " as signer: " + (await provider.getSigner().getAddress()));
      const ready = await provider.ready 
      if (ready) {
        // return PROVIDERWALLET = (await provider.getSigner().getAddress());
        return <p>Wallet: {await provider.getSigner().getAddress()}</p>;
      }
    } catch (err) {
      console.log("uh oh fam it did not work because: " + err.message);
    }
  }
};

export const wall = () => {
  
} 

export async function walletAddress() {
  if (ethereum.selectedAddress !== null) {
    // https://docs.metamask.io/guide/ethereum-provider.html#chain-ids
    console.log("metamask: " + ethereum.isMetaMask + ", network: " + ethereum.networkVersion + ", address: " + ethereum.selectedAddress );
    // return CONNECTEDWALLET = ethereum.selectedAddress
    return ethereum.selectedAddress
  } else {
    console.log("wallet is not connected. address: " + ethereum.selectedAddress );
  }
}

export async function wallo() {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // await provider.send("eth_requestAccounts", []);
  try {
    const signer = await provider.getSigner().getAddress();
    console.log(signer);
    // return signer;
    return <p>Wallet: {await provider.getSigner().getAddress()}</p>;
  } catch (err) {
    console.log("gotem")
  }
}

// const globalProvider = new ethers.providers.Web3Provider(window.ethereum, "any");
// export const Wallet = globalProvider
export async function wawa() {
  const WALLET = await wallo();
  return WALLET;
}

// export const ADDY = () => {
//   return <p>Wallet: {ethereum.selectedAddress}</p>;
// }



// // A Web3Provider wraps a standard Web3 provider, which is
// // what MetaMask injects as window.ethereum into each page
// const provider = new ethers.providers.Web3Provider(window.ethereum)

// // The MetaMask plugin also allows signing transactions to
// // send ether and pay to change state within the blockchain.
// // For this, you need the account signer...
// const signer = provider.getSigner()

// // Get the balance of an account (by address or ENS name, if supported by network)
// let balance = await provider.getBalance(signer.getAddress.toString)
// // { BigNumber: "2337132817842795605" }

// // Often you need to format the output to something more user-friendly,
// // such as in ether (instead of wei)
// formattedBalance = ethers.utils.formatEther(balance)
// // '2.337132817842795605'


// export const connect() {
//     // const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
//     // // Prompt user for account connections
//     // // await provider.send("eth_requestAccounts", []);
//     // await window.ethereum.send('eth_requestAccounts')
//     // const signer = provider.getSigner();
//     // console.log("Account:", await signer.getAddress());
//     // await window.ethereum.request({ method: 'eth_requestAccounts' })
//     // const provider = new ethers.providers.Web3Provider(window.ethereum);
//     // const signer = provider.getSigner();
//     const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
//     // Prompt user for account connections
//     await provider.send("eth_requestAccounts", []);
//     const signer = provider.getSigner();
//     console.log("Account:", await signer.getAddress());
//   }







// export async function getSigner(provider) {
//   try {
//     // const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
//     // Prompt user for account connections
//     // await provider.send("eth_requestAccounts", []);
//     const signer = provider.getSigner();
//     console.log("Account:", await signer.getAddress());
//     return signer;//, signer;
//   } catch (err) {
//     // throw new Error('uh oh fam it did not work');
//     console.log("uh oh fam it did not work because: " + err.message);
//   }
// }
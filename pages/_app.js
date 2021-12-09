import '../styles/globals.css'
// import styles from '../styles/Home.module.css'
import 'victormono'
import HTMLHead from "../components/HTMLHead";

// function head() {
//   return (
//     <Head>
//       <title>grean</title>
//       <meta name="description" content="an 🦙🍜™ project" />
//       <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>"></link>
//     </Head>
//   )
// }

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <HTMLHead />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

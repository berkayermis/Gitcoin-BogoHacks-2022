import '../styles/globals.css'
import { Web3Provider } from "../components/web3/providers";

import Header from "../components/Header";
import Footer from '../components/Footer/index'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Web3Provider>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </Web3Provider>
  </>
  )
}

export default MyApp

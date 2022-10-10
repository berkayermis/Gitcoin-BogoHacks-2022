import '../styles/globals.css'
import { Web3Provider } from "../components/web3/providers";

import Header from "../components/header";
import Footer from '../components/footer'

export default function MyApp({ Component, pageProps }) {
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
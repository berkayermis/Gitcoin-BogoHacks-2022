import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3Provider } from "../components/web3/providers";

import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
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

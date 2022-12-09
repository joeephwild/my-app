import '../styles/globals.css'
import  { WhitelistProvider } from '../constant/WhitelistContext'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp

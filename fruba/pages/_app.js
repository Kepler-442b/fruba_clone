import '../styles/globals.css'
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />  {/* {the page is passed in as a child } */}
    </Layout>
  )
}

export default MyApp

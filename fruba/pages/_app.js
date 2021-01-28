import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="container">
      <Component {...pageProps} />  {/* {the page is passed in as a child } */}
    </Layout>
  )
}

export default MyApp

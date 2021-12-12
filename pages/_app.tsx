import { AppProps } from 'next/app'
import Layout from '../components/templates/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App

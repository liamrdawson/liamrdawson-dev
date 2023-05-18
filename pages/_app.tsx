import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import { theme } from '../components/Theme/theme'
import Layout from '../components/templates/Layout'
import { Global } from '../shared/globalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App

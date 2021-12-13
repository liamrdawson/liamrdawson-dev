import { ThemeProvider } from '@emotion/react'
import { theme } from '../components/Theme/theme'
import { AppProps } from 'next/app'
import Layout from '../components/templates/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App

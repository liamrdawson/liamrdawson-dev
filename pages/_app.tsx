import { ThemeProvider } from '@emotion/react'
import { AppProps } from 'next/app'
import { theme } from '../components/Theme/theme'
import Layout from '../components/templates/Layout'
import { globalStyles } from '../shared/globalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App

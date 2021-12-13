import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import Layout from '../components/templates/Layout'
import { theme } from '../components/Theme/theme'

const GlobalStyle = createGlobalStyle`
  body: {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App

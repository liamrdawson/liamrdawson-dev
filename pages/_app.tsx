// import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ThemeProvider, jsx } from '@emotion/react'
import { theme } from '../components/Theme/theme'
import { AppProps } from 'next/app'
import Layout from '../components/templates/Layout'

// const GlobalStyle = createGlobalStyle`
//   body: {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App

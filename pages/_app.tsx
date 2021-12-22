import { ThemeProvider } from '@emotion/react'
import { theme } from '../components/Theme/theme'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Layout from '../components/templates/Layout'
import { globalStyles } from '../shared/globalStyles'
import { LanguageContext, languages } from '../context'

function App({ Component, pageProps }: AppProps) {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])
  return (
    <>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider value={[currentLanguage, setCurrentLanguage]}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LanguageContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App

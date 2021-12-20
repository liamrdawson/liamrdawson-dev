import Head from 'next/head'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import { navigation } from '../../../pages/api/navigation'
import { ReactNode } from 'react'
import { css, useTheme, Global } from '@emotion/react'

const bodyStyles = css`
  background-color: blue;
`
interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const theme = useTheme()
  return (
    <>
      <Head>
        <title>Liam&apos;s Site</title>
      </Head>
      <Global styles={bodyStyles} />
      <Header navigation={navigation} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

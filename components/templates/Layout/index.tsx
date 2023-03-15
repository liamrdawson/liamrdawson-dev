import Head from 'next/head'
import { ReactNode } from 'react'
import { css, Global } from '@emotion/react'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

export const navigation = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

const mainStyles = css`
  min-height: 100vh;
`

const bodyStyles = css`
  background-color: blue;
`
interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Liam&apos;s Site</title>
      </Head>
      <Global styles={bodyStyles} />
      <Header navigation={navigation} />
      <main css={mainStyles}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

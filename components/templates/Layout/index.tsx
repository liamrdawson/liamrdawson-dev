import Head from 'next/head'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import { ReactNode } from 'react'
import { css, useTheme, Global } from '@emotion/react'

export const navigation = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
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

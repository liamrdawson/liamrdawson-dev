import Head from 'next/head'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import { navigation } from '../../../pages/api/navigation'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Liam&apos;s Site</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <Header navigation={navigation} title="I ❤️ SOUL 🎂" />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

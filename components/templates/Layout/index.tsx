import Head from 'next/head'
import { ReactNode } from 'react'
import styled from 'styled-components'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import grain from '../../../public/images/noise-1-small-3.jpg'

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
    name: 'Articles',
    path: '/articles',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

interface Props {
  children: ReactNode
}

const TextureWrapper = styled.div`
  overflow-x: hidden;
  position: relative;
`

const GrainOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: repeat;
  background-image: url(${grain.src});
  background-size: 125vw;
  mix-blend-mode: screen;
  pointer-events: none;
`

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Liam&apos;s Site</title>
      </Head>
      <TextureWrapper>
        <Header navigation={navigation} />
        {children}
        <Footer />
        {/* <GrainOverlay /> */}
      </TextureWrapper>
    </>
  )
}

export default Layout

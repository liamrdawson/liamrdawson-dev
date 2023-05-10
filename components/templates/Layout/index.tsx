import Head from 'next/head'
import { ReactNode } from 'react'
import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import grain from '../../../public/images/noise-1-small-2.jpeg'

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

const bodyStyles = css`
  background-color: blue;
`

interface Props {
  children: ReactNode
}

const TextureWrapper = styled.div`
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
      <Global styles={bodyStyles} />
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

import Head from 'next/head'
import { ReactNode } from 'react'
import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import grain from '../../../35mm-Dirty-Film-Grain.jpeg'

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

const mainStyles = css`
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
`

const bodyStyles = css`
  background-color: blue;
`

interface Props {
  children: ReactNode
}

const TextureWrapper = styled.div`
  position: relative;
  padding-top: 30px;
`

const GrainOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: repeat;
  background-image: url(${grain.src});
  opacity: 0.4;
  mix-blend-mode: hard-light;
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
        <main css={mainStyles}>{children}</main>
        <Footer />
        <GrainOverlay />
      </TextureWrapper>
    </>
  )
}

export default Layout

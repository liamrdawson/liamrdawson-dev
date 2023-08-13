import { Metadata } from 'next'
import { Jost, Inter } from 'next/font/google'
import Footer from '@/components/organisms/Footer/Footer'
import Header from '@/components/organisms/Header/Header'
import 'normalize.css'
import '../styles/theme.css'
import '../styles/global.css'
import GrainOverlay from '@/components/atoms/GrainOverlay/GrainOverlay'

export const metadata: Metadata = {
  title: 'Create Connections',
  description: 'Welcome to Next.js',
}

const jost = Jost({
  subsets: ['latin'],
  variable: '--jost',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
  display: 'swap',
  adjustFontFallback: false,
})

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

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={`${inter.variable} ${jost.variable}`}>
      <head />
      <body>
        <GrainOverlay />
        <Header navigation={navigation} />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import { Metadata } from 'next'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import { ThemeProvider } from './providers'
import StyledComponentsRegistry from '../lib/registry'

export const metadata: Metadata = {
  title: 'Create Connections',
  description: 'Welcome to Next.js',
}

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
    <ThemeProvider>
      <html lang="en">
        <head />
        <body>
          <StyledComponentsRegistry>
            <Header navigation={navigation} />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </body>
      </html>
    </ThemeProvider>
  )
}

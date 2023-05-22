import { Metadata } from 'next'
import { ThemeProvider } from './providers'
import Header from '../components/organisms/Header'

export const metadata: Metadata = {
  title: 'My Fancy Page',
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
    path: '/artiles',
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
          <Header navigation={navigation} />
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}

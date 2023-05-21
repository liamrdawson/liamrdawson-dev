import { Metadata } from 'next'
import { ThemeProvider } from './providers'
import Header from '../components/organisms/Header'

/**
 *
 * * The app directory must include a root layout.
 * * The root layout must define <html>, and <body> tags since Next.js does not automatically create them
 * * The root layout replaces the pages/_app.tsx and pages/_document.tsx files.
 * * .js, .jsx, or .tsx extensions can be used for layout files.
 *
 */

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

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: any
}) {
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

import { Metadata } from 'next'

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

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1>Test</h1>
        {children}
      </body>
    </html>
  )
}

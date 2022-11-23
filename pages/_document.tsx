import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#5A282F" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#5A282F" media="(prefers-color-scheme: dark)" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

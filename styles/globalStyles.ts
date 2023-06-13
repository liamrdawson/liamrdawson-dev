import { createGlobalStyle } from 'styled-components'
import 'normalize.css'
import './theme.css'

import { Jost, Inter } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })
const inter = Inter({
  weight: ['100', '400', '600', '900'],
  subsets: ['latin'],
  fallback: ['arial'],
})

export const Global = createGlobalStyle`
      :root {
        --font-family-hero: ${inter.style.fontFamily};
        --font-family-header: ${inter.style.fontFamily};
        --font-family-header: Didot, serif;
      }
      html {
        --tester: red;
        height: 100%;
        margin: 0;
        font-size: var(--rem-base);
        * {
          box-sizing: border-box;
        }
      }
      body {
        min-height: 100%;
        margin: 0 auto;
        font-size: var(--font-size-body);
        color: var(--color-text-base);
        background: var(--color-background-inverse);
        font-family: Jost, Arial, sans-serif;
        max-width: 100%;
      }
    `

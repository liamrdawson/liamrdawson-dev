import { createGlobalStyle } from 'styled-components'
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
        --font-family-hero: ${jost.style.fontFamily};
        --font-family-header: ${inter.style.fontFamily};
        --font-family-header: Didot, serif;
      }
      html {
        --tester: red;
        height: 100%;
        margin: 0;
        font-size: 14px;
        @media (min-width: 763px) {
          font-size: 16px;
        }
        @media (min-width: 1023px) {
          font-size: 18px;
        }
        * {
          box-sizing: border-box;
        }
      }
      body {
        min-height: 100%;
        margin: 0 auto;
      }
      body {
        color: var(--color-text-base);
        background: var(--color-background-inverse);
        font-family: Jost, Arial, sans-serif;
        max-width: 100%;
      }
    `

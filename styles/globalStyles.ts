import { createGlobalStyle } from 'styled-components'
import './theme.scss'

export const Global = createGlobalStyle`

      :root {

        @media only screen and (min-width: 1280px) {
            :root {
                --font-size-small:var(--font-text-body-sm-desktop-font-size);
                --font-size-body: var(--font-text-body-base-desktop-font-size);
                --font-size-large: var(--font-text-body-lg-desktop-font-size);
            }
        }

        @media only screen and (min-width: 1920px) {
            :root {
                --rem-base:0.5vw;
            }
        }

        @media only screen and (min-width: 480px) {
            :root {
                --font-size-h1:var(--font-text-heading-xxl-portrait-font-size);
            }
        }

        @media only screen and (min-width: 1024px) {
            :root {
                --font-size-h1:var(--font-text-heading-xxl-desktop-font-size);
            }
        }

        @media only screen and (min-width: 1280px) {
            :root {
                --font-size-h2:var(--font-text-heading-xl-desktop-font-size);
                --font-size-h3: var(--font-text-heading-lg-desktop-font-size);
                --font-size-h4: var(--font-text-heading-md-desktop-font-size);
                --font-size-h5: var(--font-text-heading-sm-desktop-font-size);
                --font-size-h6: var(--font-text-heading-xs-desktop-font-size);
            }
        }
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
        color: ${(props) => props.theme.colour.text};
        background: ${(props) => props.theme.colour.background};
        font-family: Jost, Arial, sans-serif;
        max-width: 100%;
      }
    `

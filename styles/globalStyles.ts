import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
      html {
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

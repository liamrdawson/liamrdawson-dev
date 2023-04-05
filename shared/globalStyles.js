import { css, Global } from '@emotion/react'
import { theme } from '../components/Theme/theme'

export const globalStyles = (
  <Global
    styles={css`
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
      }
      body {
        min-height: 100%;
        margin: 0 auto;
      }
      body {
        color: ${theme.colour.text};
        background: ${theme.colour.background};
        font-family: Futura, Arial, sans-serif;
        max-width: 100%;
      }
    `}
  />
)

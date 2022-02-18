import { css, Global } from '@emotion/react'
import { theme } from '../components/Theme/theme'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0 auto;
        overflow-x: hidden;
        color: ${theme.colour.text};
        background: ${theme.colour.background};
        min-height: 100%;
        font-family: Futura, Arial, sans-serif;
        font-size: 14px;
        max-width: 90%;
        @media (min-width: 763px) {
          font-size: 16px;
          max-width: 80%;
        }
        @media (min-width: 1023px) {
          font-size: 18px;
          max-width: 70%;
        }
      }
    `}
  />
)

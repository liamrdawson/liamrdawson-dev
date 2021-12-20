import { css, Global } from '@emotion/react'
import { theme } from '../components/Theme/theme'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0 auto;
        color: ${theme.colour.text};
        background: ${theme.colour.background};
        min-height: 100%;
        font-family: Futura, Arial, sans-serif;
        max-width: 70%;
      }
    `}
  />
)

import { css } from '@emotion/react'
import { ITheme } from '../../Theme/theme'

const calloutStyles = (theme: ITheme) => css`
  color: ${theme.colour.textInverted};
  background-color: ${theme.colour.tertiary};
  padding: ${theme.SPACING[6]};
  margin: ${theme.SPACING[10]} 0;
`
type CalloutProps = {
  children: React.ReactNode
}

export const Callout = ({ children }: CalloutProps) => <p css={calloutStyles}>{children}</p>

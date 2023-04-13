import styled from '@emotion/styled'

export const Callout = styled.p`
  color: ${(props) => props.theme.colour.secondary};
  background-color: ${(props) => props.theme.colour.tertiary};
  padding: ${(props) => props.theme.SPACING[6]};
  margin: ${(props) => props.theme.SPACING[10]} 0;
`

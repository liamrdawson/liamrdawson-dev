import styled from 'styled-components'

interface NewHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

export const Heading = styled.span<NewHeadingProps>`
  text-transform: uppercase;
  margin: 3rem 0 1.38rem;
  line-height: 1.3;
  font-size: ${({ as }) => `var(--font-size-${as ?? 'h1'})`};
`

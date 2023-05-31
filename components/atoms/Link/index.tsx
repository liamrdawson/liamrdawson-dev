import Link from 'next/link'
import styled from 'styled-components'

interface LinkAtomProps {
  path: string
  name: string
}

const StyledSpan = styled.span`
  a {
    color: var(--color-text-inverse-base);
    font-family: var(--font-family-primary);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const LinkAtom = ({ path, name }: LinkAtomProps) => (
  <StyledSpan>
    <Link href={path} passHref>
      {name}
    </Link>
  </StyledSpan>
)

export default LinkAtom

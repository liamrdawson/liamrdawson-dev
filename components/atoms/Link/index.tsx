import Link from 'next/link'
import styled from 'styled-components'

interface LinkAtomDataTypes {
  path: string
  name: string
}

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.colour.tertiary};
  font-family: ${(props) => props.theme.typography.primaryFont};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const LinkAtom = ({ path, name }: LinkAtomDataTypes) => {
  return (
    <Link href={path}>
      <StyledAnchor>
        <span>{name}</span>
      </StyledAnchor>
    </Link>
  )
}

export default LinkAtom

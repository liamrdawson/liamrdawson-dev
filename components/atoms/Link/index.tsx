import Link from 'next/link'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

interface LinkAtomProps {
  path: string
  name: string
}

const StyledAnchor = styled.a`
  color: ${(props) => props.theme.colour.primary};
  font-family: ${(props) => props.theme.typography.primaryFont};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const LinkAtom = ({ path, name }: LinkAtomProps) => {
  const theme = useTheme()
  return (
    <Link href={path} passHref>
      <StyledAnchor theme={theme}>
        <span>{name}</span>
      </StyledAnchor>
    </Link>
  )
}

export default LinkAtom
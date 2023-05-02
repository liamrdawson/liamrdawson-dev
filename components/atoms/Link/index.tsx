import Link from 'next/link'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

interface LinkAtomProps {
  path: string
  name: string
}

const StyledSpan = styled.span`
  a {
    color: ${(props) => props.theme.colour.background};
    font-family: ${(props) => props.theme.typography.primaryFont};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const LinkAtom = ({ path, name }: LinkAtomProps) => {
  const theme = useTheme()
  return (
    <StyledSpan theme={theme}>
      <Link href={path} passHref>
        {name}
      </Link>
    </StyledSpan>
  )
}

export default LinkAtom

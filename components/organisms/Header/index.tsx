'use client'

import styled from 'styled-components'
import Nav from '../../molecules/Nav'

interface ILink {
  path: string
  name: string
}

interface Props {
  navigation: ILink[]
}

const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--color-background-primary);
  overflow: hidden;
  nav {
    color: var(--color-text-inverse-base);
    width: 30%;
    margin: 0 auto;
  }
`

const Header = ({ navigation }: Props) => (
  <StyledHeader>
    <Nav navLinks={navigation} />
  </StyledHeader>
)

export default Header

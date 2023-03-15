import styled from '@emotion/styled'
import LinkAtom from '../../atoms/Link'

interface INavLink {
  path: string
  name: string
}

interface Props {
  navLinks: INavLink[]
}

const StyledNav = styled.nav`
  width: 100%;
  ul {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    margin: 0;
  }
`

const Nav = ({ navLinks }: Props) => (
  <StyledNav>
    <ul>
      {navLinks.map((navLink) => (
        <li key={`navLink-${navLinks.indexOf(navLink)}`}>
          <LinkAtom path={navLink.path} name={navLink.name} />
        </li>
      ))}
    </ul>
  </StyledNav>
)

export default Nav

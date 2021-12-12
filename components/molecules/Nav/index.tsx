import LinkAtom from '../../atoms/Link'

interface INavLink {
  path: string
  name: string
}

interface Props {
  navLinks: INavLink[]
}

const Nav = ({ navLinks }: Props) => (
  <nav>
    <ul>
      {navLinks.map((navLink) => {
        return (
          <li key={`navLink-${navLinks.indexOf(navLink)}`}>
            <LinkAtom path={navLink.path} name={navLink.name} />
          </li>
        )
      })}
    </ul>
  </nav>
)

export default Nav

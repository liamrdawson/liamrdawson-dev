import LinkAtom from '@/components/atoms/Link/Link'
import style from './nav.module.css'

interface INavLink {
  path: string
  name: string
}

interface Props {
  navLinks: INavLink[]
}

const Nav = ({ navLinks }: Props) => (
  <nav className={style.nav}>
    <ul>
      {navLinks.map((navLink) => (
        <li key={`navLink-${navLinks.indexOf(navLink)}`}>
          <LinkAtom path={navLink.path} name={navLink.name} />
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav

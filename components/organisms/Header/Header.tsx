import Nav from '@/components/molecules/Nav/Nav'
import style from './header.module.css'

interface ILink {
  path: string
  name: string
}

interface Props {
  navigation: ILink[]
}

const Header = ({ navigation }: Props) => (
  <header className={style.header}>
    <Nav navLinks={navigation} />
  </header>
)

export default Header

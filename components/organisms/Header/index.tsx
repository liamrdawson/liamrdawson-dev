import Nav from '../../molecules/Nav'

interface ILink {
  path: string
  name: string
}

interface Props {
  navigation: ILink[]
  title: string
}

const Header = ({ navigation, title }: Props) => {
  return (
    <header>
      <h1>{title}</h1>
      <Nav navLinks={navigation} />
    </header>
  )
}

export default Header

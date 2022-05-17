import styled from '@emotion/styled'
import Nav from '../../molecules/Nav'

interface ILink {
  path: string
  name: string
}

interface Props {
  navigation: ILink[]
  title?: string
}

const StyledHeader = styled.header`
  margin: 0 auto;
  max-width: 90%;
  @media (min-width: 1023px) {
    max-width: 80%;
  }
  @media (min-width: 767px) {
    max-width: 75%;
  }
`

const Header = ({ navigation, title }: Props) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Nav navLinks={navigation} />
    </StyledHeader>
  )
}

export default Header

import styled from '@emotion/styled'
import Nav from '../../molecules/Nav'

interface ILink {
  path: string
  name: string
}

interface Props {
  navigation: ILink[]
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

const Header = ({ navigation }: Props) => (
  <StyledHeader>
    <Nav navLinks={navigation} />
  </StyledHeader>
)

export default Header

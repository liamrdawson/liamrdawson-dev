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
  /* background-color: $(props) => props.theme.colour.primary}; */
  overflow: hidden;
  nav {
    /* color: $(props) => props.theme.colour.background}; */
    width: 30%;
    /* margin: $(props) => props.theme.SPACING[9]} auto $(props) => props.theme.LAYOUT[5]}; */
  }
`

const Header = ({ navigation }: Props) => (
  <StyledHeader>
    <Nav navLinks={navigation} />
  </StyledHeader>
)

export default Header

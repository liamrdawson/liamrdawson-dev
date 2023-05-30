import styled from 'styled-components'
import useHasMounted from '../../../utils/setHasMountedHook'

const StyledFooter = styled.footer`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.colour.tertiary};
  color: ${(props) => props.theme.colour.secondary};
  margin: ${(props) => props.theme.LAYOUT[10]} auto 0;
  a {
    text-decoration: none;
    text-align: center;
    color: ${(props) => props.theme.colour.secondary};
  }
  p {
    font-size: ${(props) => props.theme.typography.typeScale._050};
    height: 16px;
    text-align: center;
  }
`

const Footer: React.FunctionComponent = () => {
  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return null
  }

  const date = new Date().getFullYear()
  return (
    <StyledFooter>
      <a href="mailto:hello@liamrdawson.com">hello@liamrdawson.com</a>
      <p>Copyright &copy; {date} Liam Dawson</p>
    </StyledFooter>
  )
}

export default Footer

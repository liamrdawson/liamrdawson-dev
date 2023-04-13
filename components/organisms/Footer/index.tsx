import useHasMounted from '../../../utils/setHasMountedHook'
import { ITheme } from '../../Theme/theme'

const footerStyles = (theme: ITheme) => `
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colour.tertiary};
  color: ${theme.colour.secondary};
  margin: ${theme.LAYOUT[10]} auto 0;
    a {
      text-decoration: none;
      text-align: center;
      color: ${theme.colour.secondary};
    }
    p {
        font-size: ${theme.typography.typeScale._050};
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
    <footer css={footerStyles}>
      <a href="mailto:hello@liamrdawson.com">hello@liamrdawson.com</a>
      <p>Copyright &copy; {date} Liam Dawson</p>
    </footer>
  )
}

export default Footer

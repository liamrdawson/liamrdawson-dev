import { ITheme } from '../../Theme/theme'

const footerStyles = (theme: ITheme) => `
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
    p {
        font-size: ${theme.typography.typeScale._050};
        height: 16px;
        text-align: center;
    }
`

const Footer: React.FunctionComponent = () => {
  const date = new Date().getFullYear()
  return (
    <footer css={footerStyles}>
      <p>Copyright &copy; {date} Liam Dawson</p>
    </footer>
  )
}

export default Footer

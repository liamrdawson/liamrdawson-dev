import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { Callout } from '../../atoms/Callout/Callout'

const StyledSection = styled.section`
  color: ${(props) => props.theme.colour.tertiary};
  font-size: 1rem;
  text-align: center;
  height: 400px;
  margin: ${(props) => props.theme.LAYOUT[10]} auto;
  p {
    line-height: 2.5;
  }
`

const Introduction = () => {
  const theme = useTheme()
  return (
    <StyledSection theme={theme}>
      <strong>Hey, I&apos;m Liam Dawson.</strong>
      <Callout>
        <strong>I love building amazing websites and applicataions.</strong>
      </Callout>
      <p>
        I&apos;m a web designer/developer and photographer based in England who loves building innovative apps and
        solving problems with code. I help businesses grow their sales, enhance their brand and connect with their
        audience by creating unforgettable digital e-commerce experiences rooted in culture.
      </p>
      <p>Welcome to my small corner of the internet.</p>
      <p>If you think we could work together to enhance your business, or just want to say hi -</p>
      <p>
        <strong>Let&apos;s Talk</strong>
      </p>
    </StyledSection>
  )
}

export default Introduction

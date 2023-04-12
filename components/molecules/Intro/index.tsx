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
        I&apos;m a <strong>Full Stack Developer</strong> based in <strong>England</strong>, helping businesses grow by
        delivering robust and scalable solutions to complex business problems.
      </p>
      <p>
        Welcome to my small corner of the internet where I write about work, tech, photography, life, anything else.
      </p>
    </StyledSection>
  )
}

export default Introduction

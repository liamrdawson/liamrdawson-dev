import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

const StyledSection = styled.section`
  color: ${(props) => props.theme.colour.tertiary};
  font-size: 1rem;
  text-align: center;
  height: 400px;
  width: 60%;
  margin: 0 auto;
  p {
    line-height: 2.5;
    margin: 2rem 0;
  }
`

const Callout = styled.p`
  color: ${(props) => props.theme.colour.textInverted};
  background-color: ${(props) => props.theme.colour.tertiary};
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
        I&apos;m a <strong>Full Stack Developer</strong> based in <strong>England</strong> who loves building innovative
        apps and solving problems with code. I&apos;m always learning new skills, discovering exciting tools, and
        putting them into practice to build modern and scalable applications.
      </p>
      <p>Here are the ones I use most:</p>
    </StyledSection>
  )
}

export default Introduction

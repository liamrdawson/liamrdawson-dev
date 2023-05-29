import styled from 'styled-components'
import { Callout } from '../../atoms/Callout/Callout'

const StyledSection = styled.section`
  color: var(--color-text-inverse-secondary);
  text-align: center;
  margin: var(--page-section) auto;
  max-width: 800px;
  p {
    line-height: 2.5;
  }
`

const Introduction = () => (
  <StyledSection>
    <strong>Hey, I&apos;m Liam Dawson.</strong>
    <Callout>
      <strong>I love building amazing websites and applicataions.</strong>
    </Callout>
    <p>
      I&apos;m a web designer/developer and photographer based in England who loves building innovative apps and solving
      problems with code. I help businesses grow their sales, enhance their brand and connect with their audience by
      creating unforgettable digital e-commerce experiences rooted in culture.
    </p>
    <p>Welcome to my small corner of the internet.</p>
    <p>If you think we could work together to enhance your business, or just want to say hi;</p>
    <p>
      <strong>Let&apos;s Talk</strong>
    </p>
  </StyledSection>
)

export default Introduction

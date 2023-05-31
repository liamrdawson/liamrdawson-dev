'use client'

import styled from 'styled-components'

const StyledFooter = styled.footer`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-background-primary);
  color: var(--color-text-inverse-base);
  margin: var(--grid-gutter) auto 0;
  a {
    text-decoration: none;
    text-align: center;
    color: var(--color-text-inverse-base);
  }
  p {
    font-size: var(--font-size-small);
    height: 16px;
    text-align: center;
  }
`

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <StyledFooter>
      <a href="mailto:hello@liamrdawson.com">hello@liamrdawson.com</a>
      <p>Copyright &copy; {date} Liam Dawson</p>
    </StyledFooter>
  )
}

export default Footer

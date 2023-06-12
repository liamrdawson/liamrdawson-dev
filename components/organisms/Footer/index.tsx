'use client'

import { Heading } from '@/components/atoms/Heading'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: var(--page-section);
  background-color: var(--color-background-primary);
  color: var(--color-text-inverse-base);
  a {
    font-weight: var(--font-weight-link);
    text-decoration: underline;
    text-align: center;
    color: var(--color-text-inverse-base);
  }
`

const Copyright = styled.div`
  text-align: center;
  font-size: var(--font-size-small);
  margin-top: var(--footer-row);
  color: var(--color-text-footer-copyright);
  padding-left: var(--grid-padding);
  padding-right: var(--grid-padding);
  padding-bottom: var(--grid-padding);
  text-transform: uppercase;
`

const Content = styled.div`
  font-size: var(--ds-size-font-xxl);
  margin-top: var(--footer-row);
  padding-left: var(--grid-padding);
  padding-right: var(--grid-padding);
`

const SocialsList = styled.div`
  margin-top: var(--footer-row);
  padding-left: var(--grid-padding);
  padding-right: var(--grid-padding);
  font-size: 100%;
  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 0;
      margin-top: var(--ds-size-spacing-component-sm);
    }
  }
`

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <StyledFooter>
      <Content>
        <p>I collaborate with ambitious businesses who want to build something special. Let’s talk.</p>
        <a href="mailto:hello@liamrdawson.com">hello@liamrdawson.com</a>
      </Content>
      <SocialsList>
        <Heading as="h4">Social</Heading>
        <ul>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </SocialsList>
      <Copyright>
        <p>Copyright &copy; {date} Liam Dawson</p>
      </Copyright>
    </StyledFooter>
  )
}

export default Footer

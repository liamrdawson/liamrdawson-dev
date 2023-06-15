'use client'

import { Heading } from '@/components/atoms/Heading'
import Link from 'next/link'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: var(--page-section);
  background-color: var(--color-background-primary);
  color: var(--color-text-inverse-base);
  a {
    font-weight: var(--font-weight-h4);
    text-decoration: underline;
    text-align: center;
    color: var(--color-text-inverse-base);
  }
`

const Contact = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
  }
`

const Copyright = styled.div`
  text-align: center;
  font-size: var(--font-size-small);
  margin-top: var(--footer-row);
  color: var(--color-text-footer-copyright);
  padding: 2rem var(--grid-padding);
  text-transform: uppercase;
`

const Content = styled.div`
  font-size: var(--font-size-large);
  margin-top: var(--footer-row);
  padding-left: var(--grid-padding);
  padding-right: var(--grid-padding);
  p {
    margin-top: 0;
  }
  @media screen and (min-width: 700px) {
    width: 60%;
  }
`

const SocialsList = styled.div`
  margin-top: var(--footer-row);
  padding-left: var(--grid-padding);
  padding-right: var(--grid-padding);
  font-size: 100%;
  h4 {
    margin: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 0;
      margin-top: var(--ds-size-spacing-component-sm);
      a {
        text-decoration: none;
        font-weight: 400;
      }
    }
  }
  @media screen and (min-width: 700px) {
    width: fit-content;
  }
`

const NoWrap = styled.span`
  white-space: nowrap;
`

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <StyledFooter>
      <Contact>
        <Content>
          <p>
            I collaborate with ambitious businesses who want to build something special. <NoWrap>Let’s talk.</NoWrap>
          </p>
          <a href="mailto:hello@liamrdawson.com">hello@liamrdawson.com</a>
        </Content>
        <SocialsList>
          <Heading as="h4">Social</Heading>
          <ul>
            <li>
              <Link href="https://www.instagram.com/liam_r_dawson/">Instagram</Link>
            </li>
            <li>
              <Link href="https://twitter.com/LiamRDawson">Twitter</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/liamrdawson/">LinkedIn</Link>
            </li>
          </ul>
        </SocialsList>
      </Contact>
      <Copyright>
        <p>Copyright &copy; {date} Liam Dawson</p>
      </Copyright>
    </StyledFooter>
  )
}

export default Footer

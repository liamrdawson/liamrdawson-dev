'use client'
import styled from 'styled-components'
import Introduction from '../components/molecules/Intro'
import ArticlesBlock from '../components/organisms/ArticlesBlock'
import { HeroBanner } from '../components/organisms/HeroBanner'
import type Post from '../types/post'

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.

type Props = {
  allPosts: Post[]
}

const StyledMain = styled.main`
  min-height: 100vh;
  margin: 0 auto;
`

const HomePage = ({ allPosts }: Props) => {
  const sortedPosts = allPosts.sort((post1, post2) => (Date.parse(post1.date) > Date.parse(post2.date) ? -1 : 1))
  return (
    <>
      <HeroBanner />
      <StyledMain>
        <Introduction />
        <ArticlesBlock articles={sortedPosts} />
      </StyledMain>
    </>
  )
}

export default HomePage

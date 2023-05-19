'use client'

import styled from 'styled-components'
import Introduction from '../components/molecules/Intro'
import ArticlesBlock from '../components/organisms/ArticlesBlock'
import type Post from '../types/post'
import { HeroBanner } from '../components/organisms/HeroBanner'

type Props = {
  allPosts: Post[]
}

const StyledMain = styled.main`
  min-height: 100vh;
  margin: 0 auto;
`

export default function HomePage({ allPosts }: Props): JSX.Element {
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

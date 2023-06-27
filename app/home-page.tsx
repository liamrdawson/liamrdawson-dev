'use client'

import styled from 'styled-components'
import IntroSection from '@/components/molecules/IntroSection'
import ArticlesSection from '@/components/organisms/ArticlesSection'
import { HeroBanner } from '@/components/organisms/HeroBanner'
import type Post from '@/types/post'

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
        <IntroSection />
        <ArticlesSection articles={sortedPosts} />
      </StyledMain>
    </>
  )
}

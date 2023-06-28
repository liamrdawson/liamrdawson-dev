'use client'

import IntroSection from '@/components/molecules/IntroSection/IntroSection'
import ArticlesSection from '@/components/organisms/ArticlesSection/ArticlesSection'
import { HeroBanner } from '@/components/organisms/HeroBanner/HeroBanner'
import type Post from '@/types/post'

type Props = {
  allPosts: Post[]
}

export default function HomePage({ allPosts }: Props): JSX.Element {
  const sortedPosts = allPosts.sort((post1, post2) => (Date.parse(post1.date) > Date.parse(post2.date) ? -1 : 1))
  return (
    <>
      <HeroBanner />
      <main>
        <IntroSection />
        <ArticlesSection articles={sortedPosts} />
      </main>
    </>
  )
}

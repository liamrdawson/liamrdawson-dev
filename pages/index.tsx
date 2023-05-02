import { css } from '@emotion/react'
import Introduction from '../components/molecules/Intro'
import ArticlesBlock from '../components/organisms/ArticlesBlock'
import { getAllPosts } from '../utils/blogPosts'
import type Post from '../types/post'
import { HeroBanner } from '../components/organisms/HeroBanner'

type Props = {
  allPosts: Post[]
}

const mainStyles = css`
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
`

const HomePage = ({ allPosts }: Props) => {
  const sortedPosts = allPosts.sort((post1, post2) => (Date.parse(post1.date) > Date.parse(post2.date) ? -1 : 1))
  return (
    <>
      <HeroBanner />
      <main css={mainStyles}>
        <Introduction />
        <ArticlesBlock articles={sortedPosts} />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts },
  }
}
export default HomePage

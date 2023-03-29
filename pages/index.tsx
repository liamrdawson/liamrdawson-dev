import styled from '@emotion/styled'
import HeroHeading from '../components/molecules/HeroHeading'
import Introduction from '../components/molecules/Intro'
import ArticlesBlock from '../components/organisms/ArticlesBlock'
import { getAllPosts } from '../utils/blogPosts'
import type Post from '../types/post'
import grain from '../35mm-Dirty-Film-Grain.jpeg'

const GrainOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: repeat;
  background-image: url(${grain.src});
  opacity: 0.4;
  mix-blend-mode: hard-light;
  pointer-events: none;
`

type Props = {
  allPosts: Post[]
}

const HomePage = ({ allPosts }: Props) => {
  const sortedPosts = allPosts.sort((post1, post2) => (Date.parse(post1.date) > Date.parse(post2.date) ? -1 : 1))
  return (
    <>
      <HeroHeading>I Build things</HeroHeading>
      <GrainOverlay />
      <Introduction />
      <ArticlesBlock articles={sortedPosts} />
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

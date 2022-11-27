import HeroHeading from '../components/molecules/HeroHeading'
import Introduction from '../components/molecules/Intro'
import ArticlesBlock from '../components/organisms/ArticlesBlock'
import { getAllPosts } from '../utils/blogPosts'
import type Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const HomePage = ({ allPosts }: Props) => {
  console.log(allPosts)
  return (
    <>
      <HeroHeading>I Build things</HeroHeading>
      <Introduction />
      <ArticlesBlock articles={allPosts} />
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

import Introduction from '../components/molecules/Intro'
import ArticlesBlock from '../components/organisms/ArticlesBlock'
import { getAllPosts } from '../utils/blogPosts'
import type Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const HomePage = ({ allPosts }: Props) => {
  const sortedPosts = allPosts.sort((post1, post2) => (Date.parse(post1.date) > Date.parse(post2.date) ? -1 : 1))
  return (
    <>
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

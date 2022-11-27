import Image from 'next/image'
import HeroHeading from '../components/molecules/HeroHeading'
import Introduction from '../components/molecules/Intro'
import { getAllPosts } from '../utils/blogPosts'
import Post from '../types/post'
import Link from 'next/link'

type Props = {
  allPosts: Post[]
}

const HomePage = ({ allPosts }: Props) => {
  console.log(allPosts)
  return (
    <>
      <HeroHeading>I Build things</HeroHeading>
      <Introduction />
      {allPosts.map((post) => (
        <article key={allPosts.indexOf(post)}>
          <Link as={`/blog/${post.slug}`} href="/blog/[slug]" passHref>
            <h1>{post.title}</h1>
          </Link>
          <p>{post.excerpt}</p>
        </article>
      ))}
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

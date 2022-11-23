import Image from 'next/image'
import HeroHeading from '../components/molecules/HeroHeading'
import Introduction from '../components/molecules/Intro'
import { getAllPosts } from '../utils/blogPosts'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const HomePage = ({ allPosts }: Props) => {
  console.log(allPosts)
  return (
    <>
      <HeroHeading>I Build things</HeroHeading>
      <Introduction />
      <Image src="/images/profile.jpg" height={200} width={200} alt="A picture of me having a tea." />

      {allPosts.map((post) => (
        <article key={allPosts.indexOf(post)}>
          <h1>{post.title}</h1>
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

import { css } from '@emotion/react'
import { Heading } from '../../atoms/Heading'
import HeroPostPreview, { PostPreview } from '../../molecules/HeroPostPreview'
import type Post from '../../../types/post'
import useHasMounted from '../../../utils/setHasMountedHook'

const articlesBlockStyles = css`
  margin: 0 auto;
  max-width: 60%;
`

type ArticlesInput = {
  articles: Post[]
}

const ArticlesBlock = ({ articles }: ArticlesInput) => {
  const heroPost = articles[0]
  const morePosts = articles.slice(1)
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return null
  }

  return (
    <section css={articlesBlockStyles}>
      <Heading tag="h2">Articles</Heading>
      <HeroPostPreview post={heroPost} />
      {morePosts.map((post) => (
        <PostPreview key={morePosts.indexOf(post)} post={post} />
      ))}
    </section>
  )
}

export default ArticlesBlock

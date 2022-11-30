import { Heading } from '../../atoms/Heading'
import HeroPostPreview from '../../molecules/HeroPostPreview'
import { css } from '@emotion/react'
import type Post from '../../../types/post'

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
  return (
    <section css={articlesBlockStyles}>
      <Heading tag="h2">Articles</Heading>
      <HeroPostPreview post={heroPost} />
      {morePosts.map((post) => (
        <h1 key={morePosts.indexOf(post)}>{post.title}</h1>
      ))}
    </section>
  )
}

export default ArticlesBlock

import { css } from '@emotion/react'
import { Heading } from '../../atoms/Heading'
import { PostPreview } from '../../molecules/HeroPostPreview'
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
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return null
  }

  return (
    <section css={articlesBlockStyles}>
      <Heading tag="h2">Articles</Heading>
      {articles.map((post) => (
        <PostPreview showHeroPost={true} index={articles.indexOf(post)} key={articles.indexOf(post)} post={post} />
      ))}
    </section>
  )
}

export default ArticlesBlock

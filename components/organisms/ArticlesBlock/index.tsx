import styled from 'styled-components'
import React from 'react'
import { nanoid } from 'nanoid'
import { Heading } from '../../atoms/Heading'
import { PostPreview } from '../../molecules/PostPreview'
import type Post from '../../../types/post'
import useHasMounted from '../../../utils/setHasMountedHook'

type ArticlesInput = {
  articles: Post[]
}

const HeadingAndArticlesContainer = styled.section`
  padding-left: var(--grid-padding);
  padding-right: var(--grid-padding);
  display: flex;
  flex-direction: column;
  position: relative;
  h2 {
    font-family: var(--font-family-header);
    text-transform: uppercase;
    margin: 0;
    font-size: var(--font-size-h2);
  }
  @media (min-width: 820px) {
  }
`

const TagLine = styled.p`
  font-size: var(--font-size-large);
  font-weight: 400;
  text-transform: none;
`

const ArticlesContainer = styled.div`
  display: flex;
  row-gap: var(--grid-gutter);
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 820px) {
    a:nth-of-type(1) {
      height: 400%;
    }
    :hover a:nth-of-type(1):not(:hover) {
    }
    a {
      height: 100%;
      transition: height 0.8s ease-in-out;
      overflow: hidden;
    }
  }
`

const ArticlesBlock = ({ articles }: ArticlesInput) => {
  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return null
  }

  return (
    <HeadingAndArticlesContainer>
      <Heading as="h2">
        Flowing Stream of Thoughts, Ideas & Opinions
        <TagLine>
          or: How I learned to stop worrying and love the <strong>current</strong>.
        </TagLine>
      </Heading>
      <ArticlesContainer>
        {articles.map((post) => (
          <React.Fragment key={nanoid()}>
            <PostPreview post={post} />
          </React.Fragment>
        ))}
      </ArticlesContainer>
    </HeadingAndArticlesContainer>
  )
}

export default ArticlesBlock

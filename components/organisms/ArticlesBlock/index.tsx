import { Heading } from '../../atoms/Heading'
import { PostPreview } from '../../molecules/PostPreview'
import type Post from '../../../types/post'
import useHasMounted from '../../../utils/setHasMountedHook'
import styled from 'styled-components'
import React from 'react'

type ArticlesInput = {
  articles: Post[]
}

const HeadingAndArticlesContainer = styled.section`
  @media (min-width: 820px) {
    margin: 0 ${(props) => props.theme.LAYOUT[1]};
  }
  display: flex;
  flex-direction: column;
  position: relative;
  h2 {
    font-family: ${(props) => props.theme.typography.secondaryFont};
    text-transform: uppercase;
    margin-top: 0;
    font-size: ${(props) => props.theme.typography.typeScale._700};
    margin-bottom: ${(props) => props.theme.LAYOUT[5]};
  }
`

const TagLine = styled.p`
  font-size: ${(props) => props.theme.typography.typeScale._400};
  font-weight: 400;
  text-transform: none;
`

const HeroPostContainer = styled.div`
  @media (min-width: 820) {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    column-gap: ${(props) => props.theme.SPACING[10]};
  }
  div {
    overflow: hidden;
  }
`

const ArticlesContainer = styled.div`
  display: flex;
  row-gap: ${(props) => props.theme.SPACING[5]};
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
      article {
        height: 100%;
        display: flex;
        align-items: flex-end;
      }
    }
  }
`

const Divider = styled.div`
  border: ${(props) => props.theme.colour.tertiary} 1px solid;
`

const ArticlesBlock = ({ articles }: ArticlesInput) => {
  const hasMounted = useHasMounted()
  const getViewPortWidth = (): number | null => {
    if (typeof window !== undefined) {
      return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    }
    return null
  }

  const getIsHeroPost = (index: number) => {
    const vw = getViewPortWidth()
    return vw && vw > 820 ? index === 0 : false
  }

  if (!hasMounted) {
    return null
  }

  return (
    <HeadingAndArticlesContainer>
      <HeroPostContainer>
        <Heading as="h2">
          Flowing Stream of Thoughts, Ideas & Opinions
          <TagLine>
            or: How I learned to stop worrying and love the <strong>current</strong>.
          </TagLine>
        </Heading>
        <ArticlesContainer>
          {articles.map((post, index) => (
            <React.Fragment key={index}>
              <Divider />
              <PostPreview showHeroPost={true} isHeroPost={getIsHeroPost(articles.indexOf(post))} post={post} />
            </React.Fragment>
          ))}
        </ArticlesContainer>
      </HeroPostContainer>
    </HeadingAndArticlesContainer>
  )
}

export default ArticlesBlock

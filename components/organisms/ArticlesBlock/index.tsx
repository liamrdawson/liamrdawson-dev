import { css } from '@emotion/react'
import { Heading } from '../../atoms/Heading'
import { PostPreview } from '../../molecules/PostPreview'
import type Post from '../../../types/post'
import useHasMounted from '../../../utils/setHasMountedHook'
import styled from '@emotion/styled'
import { ITheme } from '../../Theme/theme'

type ArticlesInput = {
  articles: Post[]
}

const articlesBlockStyles = (theme: ITheme) => css`
  margin: 0 ${theme.LAYOUT[1]};
  display: flex;
  flex-direction: column;
  position: relative;
  h2 {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    margin-top: 0;
    font-size: clamp(50px, 7vw, 140px);
    width: 48%;
  }
`

const tagLineStyles = css`
  font-size: 1rem;
  font-weight: 400;
  text-transform: none;
`

const HeroPostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  column-gap: ${(props) => props.theme.SPACING[10]};
  div {
    overflow: hidden;
  }
`

const ArticlesContainer = styled.div`
  display: flex;
  row-gap: ${(props) => props.theme.SPACING[5]};
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  a:nth-of-type(1) {
    height: 200%;
  }
  :hover a:nth-of-type(1):not(:hover) {
    height: 100%;
  }
  a {
    height: 100%;
    transition: height 0.8s ease-in-out;
    overflow: hidden;
    article {
      height: 100%;
    }
    :hover {
      height: 200%;
    }
  }
`

const headingNoWrap = css`
  white-space: nowrap;
`
const headingInitialLineHeight = css`
  line-height: 0.8;
`

const ArticlesBlock = ({ articles }: ArticlesInput) => {
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return null
  }

  return (
    <section css={articlesBlockStyles}>
      <HeroPostContainer>
        <Heading tag="h2">
          <span css={[headingNoWrap, headingInitialLineHeight]}>Stream of </span>Disparate Thoughts,
          <span css={headingNoWrap}>Ideas &</span>Opinions{' '}
          <span css={tagLineStyles}>
            or: How I learned to stop worrying and love the <strong>current</strong>.
          </span>
        </Heading>
        <ArticlesContainer>
          {articles.map((post) => (
            <PostPreview
              showHeroPost={false}
              isHeroPost={articles.indexOf(post) === 0}
              key={articles.indexOf(post)}
              post={post}
            />
          ))}
        </ArticlesContainer>
      </HeroPostContainer>
    </section>
  )
}

export default ArticlesBlock

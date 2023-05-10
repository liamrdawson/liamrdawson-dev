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
    width: 100%;
    overflow: hidden;
  }
`

const ArticlesContainer = styled.div`
  display: flex;
  row-gap: ${(props) => props.theme.SPACING[5]};
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  a:nth-of-type(1) {
    flex-grow: 6;
  }
  :hover a:nth-of-type(1):not(:hover) {
    flex-grow: 1;
  }
  a {
    flex-grow: 1;
    transition: all 0.8s ease-in-out 0.1s;
    article {
      height: 100%;
    }
    :hover {
      flex-grow: 6;
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
            <PostPreview showHeroPost={false} key={articles.indexOf(post)} post={post} />
          ))}
        </ArticlesContainer>
      </HeroPostContainer>
    </section>
  )
}

export default ArticlesBlock

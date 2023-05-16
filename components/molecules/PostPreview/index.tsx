import Link from 'next/link'
import styled from '@emotion/styled'
import Image from 'next/image'
import { css, useTheme } from '@emotion/react'
import type PostType from '../../../types/post'
import { Heading } from '../../atoms/Heading'
import { ITheme } from '../../Theme/theme'

type PostPreviewInput = {
  post: PostType
  showHeroPost: boolean
  isHeroPost?: boolean
}

const Article = styled.article`
  color: var(--red);
  background: none;
  color: ${(props) => props.theme.colour.tertiary};
`

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colour.primary};
  margin-top: ${(props) => props.theme.SPACING[6]};
  margin-bottom: ${(props) => props.theme.LAYOUT[10]};
  text-decoration: none;
  outline: none;
`

const ImageContainer = styled.div`
  height: 400px;
  aspect-ratio: 7/5;
  position: relative;
  img {
    object-position: 0 40%;
    object-fit: cover;
  }
`
function truncate(str: string, n: number) {
  return str.length > n ? str.slice(0, n - 1) + '&hellip;' : str
}

const headingStyles = (theme: ITheme) => css`
  margin-top: 0;
  font-family: ${theme.typography.primaryFont};
  font-size: ${theme.typography.typeScale._500};
  font-weight: ${theme.typography.typeWeight.black};
`

const headingContainerStyles = (theme: ITheme) => css`
  height: 100%;
  display: flex;
  /* align-items: flex-end; */
  flex-direction: row;
  padding: ${theme.SPACING[3]};
  width: 100%;
  h3 {
    margin-bottom: 0;
    color: ${theme.colour.tertiary};
  }
`

const PostDescription = styled.div`
  flex-grow: 1;
  margin-left: ${(props) => props.theme.SPACING[8]};
`

export const PostPreview = ({ post, isHeroPost, showHeroPost }: PostPreviewInput) => {
  const theme = useTheme()
  const truncatedContent = truncate(post.htmlContent, 2000)
  return (
    <StyledLink as={`/blog/${post.slug}`} href="blog/[slug]" passHref>
      <Article>
        <div css={headingContainerStyles}>
          <ImageContainer>
            <Image src={post.coverImage} alt="hero image" sizes="50vw" fill />
          </ImageContainer>
          <PostDescription>
            <Heading css={headingStyles(theme)} tag="h3">
              {post.title}
            </Heading>
            <p>01.02.23</p>
          </PostDescription>
        </div>
      </Article>
    </StyledLink>
  )
}

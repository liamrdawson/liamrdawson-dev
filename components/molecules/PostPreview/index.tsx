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
  border: solid 3px ${(props) => props.theme.colour.secondary};
  color: ${(props) => props.theme.colour.primary};
  background: none;
  border: solid 3px ${(props) => props.theme.colour.tertiary};
  color: ${(props) => props.theme.colour.tertiary};
`

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colour.primary};
  text-decoration: none;
  outline: none;
`

const ImageContainer = styled.div`
  height: 400px;
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
  color: ${theme.colour.primary};
  margin-top: 0;
  font-size: ${theme.typography.typeScale._300};
`

const headingContainerStyles = (theme: ITheme) => css`
  background-color: ${theme.colour.tertiary};
  padding: ${theme.SPACING[3]};
  h3 {
    margin-bottom: 0;
    padding: 0 ${theme.SPACING[3]};
    color: ${theme.colour.secondary};
  }
`

const postPreviewArticleStyles = (theme: ITheme) => css`
  padding: 0 ${theme.SPACING[5]};
`

export const PostPreview = ({ post, isHeroPost, showHeroPost }: PostPreviewInput) => {
  const theme = useTheme()
  const truncatedContent = truncate(post.htmlContent, 2000)
  return (
    <StyledLink as={`/blog/${post.slug}`} href="blog/[slug]" passHref>
      <Article>
        <div css={headingContainerStyles}>
          {isHeroPost === true && showHeroPost && (
            <ImageContainer>
              <Image src={post.coverImage} alt="hero image" sizes="50vw" fill />
            </ImageContainer>
          )}
          <Heading css={headingStyles(theme)} tag="h3">
            {post.title}
          </Heading>
        </div>
        <div>
          {isHeroPost ? (
            <article css={postPreviewArticleStyles} dangerouslySetInnerHTML={{ __html: truncatedContent }} />
          ) : (
            <p css={postPreviewArticleStyles}>{post.excerpt}</p>
          )}
        </div>
      </Article>
    </StyledLink>
  )
}

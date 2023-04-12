import Link from 'next/link'
import styled from '@emotion/styled'
import Image from 'next/image'
import { css, useTheme } from '@emotion/react'
import type Post from '../../../types/post'
import { Heading } from '../../atoms/Heading'
import { ITheme } from '../../Theme/theme'

type PostPreviewInput = {
  post: Post
  index: number
  showHeroPost: boolean
}

const Article = styled.article`
  border: solid 3px ${(props) => props.theme.colour.secondary};
  color: ${(props) => props.theme.colour.primary};
  background: none;
  margin-top: ${(props) => props.theme.LAYOUT[1]};
  min-height: 160px;
  &:hover {
    border: solid 3px ${(props) => props.theme.colour.tertiary};
    color: ${(props) => props.theme.colour.tertiary};
    h3 {
      background: ${(props) => props.theme.colour.tertiary};
      color: ${(props) => props.theme.colour.secondary};
    }
  }
  a {
    color: ${(props) => props.theme.colour.primary};
    text-decoration: none;
    outline: none;
    &:hover {
      color: ${(props) => props.theme.colour.tertiary};
      border-color: ${(props) => props.theme.colour.tertiary};
    }
  }
`

const ImageContainer = styled.div`
  height: 400px;
  position: relative;
  img {
    object-position: 0 40%;
    object-fit: cover;
  }
`

const headingStyles = (theme: ITheme) => css`
  color: ${theme.colour.primary};
  margin-top: 0;
`

export const PostPreview = ({ post, index, showHeroPost }: PostPreviewInput) => {
  const theme = useTheme()
  return (
    <Article>
      <Link as={`/blog/${post.slug}`} href="blog/[slug]" passHref>
        {index === 0 && showHeroPost && (
          <ImageContainer>
            <Image src={post.coverImage} alt="hero image" sizes="50vw" fill />
          </ImageContainer>
        )}
        <Heading css={headingStyles(theme)} tag="h3">
          {post.title}
        </Heading>
        <p>{post.excerpt}</p>
      </Link>
    </Article>
  )
}

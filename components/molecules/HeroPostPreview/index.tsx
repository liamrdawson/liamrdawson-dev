import Link from 'next/link'
import styled from '@emotion/styled'
import Image from 'next/image'
import { css, useTheme } from '@emotion/react'
import type Post from '../../../types/post'
import { Heading } from '../../atoms/Heading'
import { ITheme } from '../../Theme/theme'

type HeroPostInput = {
  post: Post
}

const Article = styled.article`
  border: solid 3px ${(props) => props.theme.colour.secondary};
  color: ${(props) => props.theme.colour.primary};
  margin-top: ${(props) => props.theme.SPACING[3]};
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

const HeroPostPreview = ({ post }: HeroPostInput) => {
  const theme = useTheme()
  return (
    <Article>
      <Link as={`/blog/${post.slug}`} href="blog/[slug]" passHref>
        <ImageContainer>
          <Image src={post.coverImage} alt="hero image" sizes="100vw" fill />
        </ImageContainer>
        <Heading css={headingStyles(theme)} tag="h3">
          {post.title}
        </Heading>
        <p>{post.excerpt}</p>
      </Link>
    </Article>
  )
}

export const PostPreview = ({ post }: HeroPostInput) => {
  const theme = useTheme()
  return (
    <Article>
      <Link as={`/blog/${post.slug}`} href="blog/[slug]" passHref>
        <Heading css={headingStyles(theme)} tag="h3">
          {post.title}
        </Heading>
        <p>{post.excerpt}</p>
      </Link>
    </Article>
  )
}

export default HeroPostPreview

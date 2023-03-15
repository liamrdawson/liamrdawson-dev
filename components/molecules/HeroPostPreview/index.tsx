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
  border: solid ${(props) => props.theme.colour.tertiary} 3px;
  a {
    color: ${(props) => props.theme.colour.tertiary};
    text-decoration: none;
    outline: none;
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
  color: ${theme.colour.secondary};
  background: ${theme.colour.tertiary};
`

/**
 * TODO: A HeroPostPreview is a post preview with an image on top. Split this out into its own PostPreview component.
 */

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

export default HeroPostPreview

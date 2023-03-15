import Link from 'next/link'
import { Heading } from '../../atoms/Heading'
import styled from '@emotion/styled'
import type Post from '../../../types/post'
import Image from 'next/image'
import { css, useTheme } from '@emotion/react'
import { ITheme } from '../../Theme/theme'

type HeroPostInput = {
  post: Post
}

const Article = styled.article`
  border: solid ${(props) => props.theme.colour.tertiary} 3px;
`

const ImageContainer = styled.div`
  height: 400px;
  position: relative;
`
const headingStyle = (theme: ITheme) => css`
  background-color: ${theme.colour.tertiary};
  color: ${theme.colour.textInverted};
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.colour.tertiary};
  text-decoration: none;
  outline: none;
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
        <StyledLink theme={theme}>
          <ImageContainer>
            <Image src={post.coverImage} layout="fill" objectPosition={'0% 40%'} objectFit="cover" alt="" />
          </ImageContainer>
          <Heading css={headingStyles(theme)} tag={'h3'}>
            {post.title}
          </Heading>
          <p>{post.excerpt}</p>
        </StyledLink>
      </Link>
    </Article>
  )
}

export default HeroPostPreview

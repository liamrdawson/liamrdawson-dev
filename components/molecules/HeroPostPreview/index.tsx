import Link from 'next/link'
import { Heading } from '../../atoms/Heading'
import styled from '@emotion/styled'
import { css, SerializedStyles, useTheme } from '@emotion/react'
import type Post from '../../../types/post'
import Image from 'next/image'
import { ITheme } from '../../Theme/theme'

type HeroPostInput = {
  post: Post
}

const StyledAnchor = styled.a`
  text-decoration: none;
`

const ImageContainer = styled.div`
  height: 400px;
  position: relative;
`
const headingStyle = (theme: ITheme) => css`
  background-color: ${theme.colour.tertiary};
  color: ${theme.colour.textInverted};
`

const HeroPostPreview = ({ post }: HeroPostInput) => {
  const theme: ITheme = useTheme()
  const additionalHeadingStyles = headingStyle(theme)
  return (
    <article>
      <Link as={`/blog/${post.slug}`} href="blog/[slug]" passHref>
        <StyledAnchor>
          <ImageContainer>
            <Image src={post.coverImage} layout="fill" objectPosition={'0% 40%'} objectFit="cover" alt="" />
          </ImageContainer>
          <Heading css={additionalHeadingStyles} tag={'h3'}>
            {post.title}
          </Heading>
          <p>{post.excerpt}</p>
        </StyledAnchor>
      </Link>
    </article>
  )
}

export default HeroPostPreview

import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import type PostType from '../../../types/post'
import { Heading } from '../../atoms/Heading'

type PostPreviewInput = {
  post: PostType
}

const Article = styled.article`
  background: none;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
`

const ImageContainer = styled.div`
  height: 400px;
  aspect-ratio: 7/5;
  position: relative;
  margin-right: var(--grid-gutter);
  img {
    object-position: 0 40%;
    object-fit: cover;
  }
`

const PostPreviewHeading = styled(Heading)`
  margin-top: 0;
  font-family: var(--font-family-primary);
`

const HeadingContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  width: 100%;
  h3 {
    margin-bottom: 0;
    color: var(--color-text-inverse-secondary);
  }
`

const PostDescription = styled.div`
  flex-grow: 1;
  color: var(--color-text-inverse-secondary);
`

export function PostPreview({ post }: PostPreviewInput) {
  return (
    <StyledLink href={`articles/${post.slug}`} passHref>
      <Article>
        <HeadingContainer>
          <ImageContainer>
            {post.coverImage && <Image src={post.coverImage} alt="hero image" sizes="50vw" fill />}
          </ImageContainer>
          <PostDescription>
            <PostPreviewHeading as="h3">{post.title}</PostPreviewHeading>
            <p>01.02.23</p>
          </PostDescription>
        </HeadingContainer>
      </Article>
    </StyledLink>
  )
}

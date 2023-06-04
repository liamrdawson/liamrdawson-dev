import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Arrow from '@/components/atoms/Arrow'
import type PostType from '../../../types/post'
import { Heading } from '../../atoms/Heading'
// import arrow from '../../../public/assets/icons/arrow.svg'

type PostPreviewInput = {
  post: PostType
}

const Article = styled.article`
  background: none;
  display: flex;
  flex-direction: column;
  margin-top: var(--post-preview);
`

const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
`

const ImageContainer = styled.div`
  aspect-ratio: 7/5;
  width: 100%;
  /** Move away from using a grid system and start using css grid */
  /* width: calc(((100vw + var(--grid-gutter) - var(--grid-padding) * 2) / 6 * 2) - var(--grid-gutter)); */
  position: relative;
  margin-right: var(--grid-gutter);
  img {
    object-position: 0 40%;
    object-fit: cover;
  }
  @media screen and (min-width: 820px) {
    width: 30%;
  }
`

const PostPreviewHeading = styled(Heading)`
  margin-top: var(--post-preview-heading);
  margin-bottom: 0;
  line-height: var(--line-height-h3);
  letter-spacing: var(--letter-spacing-h3);
  font-family: var(--font-family-primary);
  width: calc(100% - var(--font-size-h3));
`

const Divider = styled.div`
  border: var(--color-border-tertiary) 1px solid;
  width: 100%;
`

const PostDescription = styled.div`
  flex-grow: 1;
  color: var(--color-text-inverse-secondary);
  p {
    margin: 0;
    font-size: var(--font-size-small);
  }
`

const PostPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--post-preview-divider);
  @media (min-width: 820px) {
    flex-direction: row;
  }
`

const ArrowContainer = styled.div`
  position: relative;
  width: 100%;
  svg {
    position: absolute;
    right: 0;
    top: calc(0px + var(--post-preview-heading));
    height: var(--font-size-h3);
    width: var(--font-size-h3);
  }
`

export function PostPreview({ post }: PostPreviewInput) {
  return (
    <StyledLink href={`articles/${post.slug}`} passHref>
      <Article>
        <Divider />
        <PostPreviewContainer>
          <ImageContainer>
            {post.coverImage && <Image src={post.coverImage} alt="hero image" sizes="50vw" fill />}
          </ImageContainer>
          <ArrowContainer>
            <PostDescription>
              <PostPreviewHeading as="h3">{post.title}</PostPreviewHeading>
              <p>01.02.23</p>
            </PostDescription>
            <Arrow />
          </ArrowContainer>
        </PostPreviewContainer>
      </Article>
    </StyledLink>
  )
}

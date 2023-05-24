import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import type PostType from '../../../types/post'
import { Heading } from '../../atoms/Heading'

type PostPreviewInput = {
  post: PostType
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

const PostPreviewHeading = styled(Heading)`
  margin-top: 0;
  font-family: ${(props) => props.theme.typography.primaryFont};
  font-size: ${(props) => props.theme.typography.typeScale._500};
  font-weight: ${(props) => props.theme.typography.typeWeight.black};
  border: var(--testing) solid 1px;
`

const HeadingContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  padding: ${(props) => props.theme.SPACING[3]};
  width: 100%;
  h3 {
    margin-bottom: 0;
    color: ${(props) => props.theme.colour.tertiary};
  }
`

const PostDescription = styled.div`
  flex-grow: 1;
  margin-left: ${(props) => props.theme.SPACING[8]};
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

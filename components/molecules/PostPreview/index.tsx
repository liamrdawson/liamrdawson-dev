'use client'

import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Arrow from '@/components/atoms/Arrow'
import { motion, useAnimate } from 'framer-motion'
import type PostType from '../../../types/post'
import { Heading } from '../../atoms/Heading'

type PostPreviewInput = {
  post: PostType
}

const StyledMotionArticle = styled(motion.article)`
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
  position: relative;
  margin-right: var(--grid-gutter);
  max-width: 500px;
  overflow: hidden;
  img {
    object-position: 0 40%;
    object-fit: cover;
  }
  @media screen and (min-width: 540px) {
    width: 40%;
  }
`

const PostPreviewHeading = styled(Heading)`
  margin-top: var(--post-preview-heading);
  margin-bottom: 0;
  line-height: var(--line-height-h3);
  letter-spacing: var(--letter-spacing-h3);
  font-family: var(--font-family-primary);
  width: calc(100% - var(--font-size-h3));
  @media screen and (min-width: 540px) {
    margin-top: -0.3rem;
  }
`

const Divider = styled.div`
  border: var(--color-border-tertiary) 1px solid;
  width: 100%;
`

const PostDescription = styled(motion.div)`
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
  @media (min-width: 540px) {
    flex-direction: row;
  }
`

const ArrowContainer = styled.div`
  position: relative;
  width: 100%;
  svg {
    height: var(--font-size-h3);
    width: var(--font-size-h3);
    @media screen and (min-width: 540px) {
      top: -0.3rem;
    }
  }
`

const MotionImage = motion(Image)

const ImageMotion = {
  rest: {
    transform: 'perspective(500px) translate3d(0px, 0px, 50px)',
    x: 0,
  },
  hover: {
    transform: 'perspective(500px) translate3d(0px, 0px, 0px)',
    x: 50,
  },
}

const ArrowBorder = styled.div`
  height: var(--font-size-h3);
  width: var(--font-size-h3);
  position: absolute;
  top: var(--post-preview-heading);
  right: 0;
  overflow: hidden;
  @media screen and (min-width: 540px) {
    top: -0.3rem;
  }
`

export function PostPreview({ post }: PostPreviewInput) {
  const [scope, animate] = useAnimate()

  const animateArrow = async () => {
    await animate('svg', { x: 30 }, { duration: 0.2 })
    await animate('svg', { x: -30 }, { duration: 0 })
    await animate('svg', { x: 0 }, { duration: 0.2 })
  }

  return (
    <StyledLink href={`articles/${post.slug}`} passHref>
      <StyledMotionArticle onMouseEnter={() => animateArrow()} ref={scope} initial="rest" whileHover="hover">
        <Divider />
        <PostPreviewContainer>
          <ImageContainer>
            {post.coverImage && (
              <MotionImage variants={ImageMotion} src={post.coverImage} alt="hero image" sizes="50vw" fill />
            )}
          </ImageContainer>
          <ArrowContainer>
            <PostDescription>
              <PostPreviewHeading as="h3">{post.title}</PostPreviewHeading>
              <p>01.02.23</p>
            </PostDescription>
            <ArrowBorder>
              <Arrow />
            </ArrowBorder>
          </ArrowContainer>
        </PostPreviewContainer>
      </StyledMotionArticle>
    </StyledLink>
  )
}

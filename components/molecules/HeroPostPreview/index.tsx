import Link from 'next/link'
import { Heading } from '../../atoms/Heading'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import type Post from '../../../types/post'
import Image from 'next/image'

type HeroPostInput = {
  post: Post
}

const ImageContainer = styled.div`
  height: 400px;
  position: relative;
`

const HeroPostPreview = ({ post }: HeroPostInput) => (
  <article>
    <Link as={`/blog/${post.slug}`} href="blog/[slug]" passHref>
      <a>
        <ImageContainer>
          <Image src={post.coverImage} layout="fill" objectPosition={'0% 40%'} objectFit="cover" alt="" />
        </ImageContainer>
        <Heading tag={'h3'}>{post.title}</Heading>
        <p>{post.excerpt}</p>
      </a>
    </Link>
  </article>
)

export default HeroPostPreview

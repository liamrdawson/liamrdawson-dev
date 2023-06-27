'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimate } from 'framer-motion'
import Arrow from '@/components/atoms/Arrow/Arrow'
import { Heading } from '@/components/atoms/Heading/Heading'
import type PostType from '@/types/post'
import style from './post-preview.module.css'

type PostPreviewInput = {
  post: PostType
}

const MotionImage = motion(Image)

export function PostPreview({ post }: PostPreviewInput) {
  const [scope, animate] = useAnimate()

  const animateArrow = async () => {
    await animate('svg', { x: 30 }, { duration: 0.2 })
    await animate('svg', { x: -30 }, { duration: 0 })
    await animate('svg', { x: 0 }, { duration: 0.2 })
  }

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

  return (
    <Link className={style.link} href={`articles/${post.slug}`} passHref>
      <motion.article
        className={style.article}
        onMouseEnter={() => animateArrow()}
        ref={scope}
        initial="rest"
        whileHover="hover"
      >
        <div className={style.divider} />
        <div className={style['post-preview-container']}>
          <div className={style['image-container']}>
            {post.coverImage && (
              <MotionImage variants={ImageMotion} src={post.coverImage} alt="hero image" sizes="50vw" fill />
            )}
          </div>
          <div className={style['arrow-container']}>
            <motion.div className={style['post-description']}>
              <Heading className={style.heading} as="h3">
                {post.title}
              </Heading>
              <p>01.02.23</p>
            </motion.div>
            <div className={style['arrow-border']}>
              <Arrow />
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}

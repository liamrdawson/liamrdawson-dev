import React from 'react'
import { nanoid } from 'nanoid'
import { Heading } from '@/components/atoms/Heading/Heading'
import { PostPreview } from '@/components/molecules/PostPreview/PostPreview'
import type Post from '@/types/post'

import style from './articles-section.module.css'

type ArticlesInput = {
  articles: Post[]
}

const ArticlesSection = ({ articles }: ArticlesInput) => (
  <section className={style.section}>
    <Heading as="h2">
      Flowing Stream of Thoughts, Ideas & Opinions
      <p className={style.subheading}>
        or: How I learned to stop worrying and love the <strong>current</strong>.
      </p>
    </Heading>
    <ul className={style['articles-list']}>
      {articles.map((post) => (
        <li key={nanoid()}>
          <PostPreview post={post} />
        </li>
      ))}
    </ul>
  </section>
)

export default ArticlesSection

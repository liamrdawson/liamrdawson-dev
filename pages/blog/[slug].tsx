'use client'

import { useRouter } from 'next/navigation'
import ErrorPage from 'next/error'
import { remark } from 'remark'
import html from 'remark-html'
import PostType from '../../types/post'
import { getAllPosts, getPostBySlug } from '../../utils/blogPosts'

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

type Props = {
  post: PostType
}

export default function Post({ post }: Props) {
  const router = useRouter()
  if (!router && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return <article dangerouslySetInnerHTML={{ __html: post.content }} />
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

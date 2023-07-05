import { remark } from 'remark'
import html from 'remark-html'
import Post from '@/types/post'
import { getAllPosts, getPostBySlug } from '@/utils/blogPosts'
import PostLayout from './post-layout'

type Params = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug'])
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export type PostContent = Post & {
  htmlContent: TrustedHTML
}

async function getPostContent({ params }: Params): Promise<PostContent> {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])
  const content = await markdownToHtml(post.content || '')

  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    author: post.author,
    ogImage: post.ogImage,
    coverImage: post.coverImage,
    excerpt: post.excerpt,
    content: post.content,
    htmlContent: content,
  }
}

export default async function Page(params: Params) {
  const postContent = await getPostContent(params)
  return <PostLayout post={postContent} />
}

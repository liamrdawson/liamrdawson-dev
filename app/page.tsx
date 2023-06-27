import html from 'remark-html'
import { remark } from 'remark'
import Post from '@/types/post'
import { getAllPosts } from '@/utils/blogPosts'
import HomePage from './home-page'

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

async function getPosts(): Promise<Post[]> {
  const allPosts = await Promise.all(
    getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'content']).map(async (post) => {
      try {
        const htmlContent = await markdownToHtml(post.content || '')
        return {
          ...post,
          htmlContent,
        }
      } catch (error) {
        throw new Error()
      }
    }),
  )
  return allPosts
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const posts = await getPosts()
  const sortedPosts = posts.sort((post1, post2) => (Date.parse(post1.date) > Date.parse(post2.date) ? -1 : 1))
  // Forward fetched data to your Client Component
  return <HomePage allPosts={sortedPosts} />
}

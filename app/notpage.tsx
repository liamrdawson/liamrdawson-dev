import { markdownToHtml } from '../pages/blog/[slug]'
import { getAllPosts } from '../utils/blogPosts'
import HomePage from './home-page'
import type Post from '../types/post'

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts()
  // Forward fetched data to your Client Component
  return <HomePage allPosts={recentPosts} />
}

function getPosts(): Post[] {
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'content'])
  return posts
}

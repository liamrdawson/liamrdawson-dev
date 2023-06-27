import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Post from '@/types/post'
import Author from '@/types/author'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

type Data = {
  [key: string]: string | undefined
}

type Items = {
  slug: string
  title?: string
  date: string
  author?: Author
  content?: string
  ogImage?: {
    url: string
  }
  coverImage?: string
  excerpt?: string
} & Data

export function getPostBySlug(slug: string, fields: string[] = []): Items {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = {
    slug: '',
    date: '',
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

type SlugStrings = 'title' | 'date' | 'slug' | 'author' | 'coverImage' | 'excerpt' | 'content'

export function getAllPosts(fields: SlugStrings[] = []): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts as unknown as Post[]
}

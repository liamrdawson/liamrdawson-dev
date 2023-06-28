/* eslint-disable react/no-danger */
import { useRouter } from 'next/navigation'
import ErrorPage from 'next/error'
import Post from '@/types/post'

type Props = {
  post: Post & {
    htmlContent: TrustedHTML
  }
}

export default function PostLayout({ post }: Props) {
  const router = useRouter()
  if (!router && !post?.slug && !post) {
    return <ErrorPage statusCode={404} />
  }
  return <article dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
}

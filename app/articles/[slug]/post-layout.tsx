/* eslint-disable react/no-danger */
import Post from '@/types/post'

type Props = {
  post: Post & {
    htmlContent: TrustedHTML
  }
}

const PostLayout = ({ post }: Props) => <article dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
export default PostLayout
